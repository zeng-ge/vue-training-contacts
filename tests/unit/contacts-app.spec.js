import { render, fireEvent } from "@testing-library/vue";
import "@testing-library/jest-dom";
import ContactList from "../../src/pages/ContactList/index.vue";
import App from "../../src/App.vue";
import store from "../../src/store/index.js";
import { routes } from "../../src/router/index.js";

const nock = require("nock");

const mockData = [
  {
    id: 1,
    name: "youyuxi",
    telphone: { type: "home", mobile: "15502980060" },
    gender: "男",
    tags: ["vue"],
    address: "China"
  }
];
beforeEach(() => {
  nock("http://api.contacts.cn")
    .get("/api/contacts")
    .reply(200, mockData);
});

it("should load contacts and display them", async done => {
  const { findByText, getByText } = render(
    ContactList,
    {
      routes: routes
    },
    () => {
      return {
        store
      };
    }
  );
  // debug();
  await findByText("youyuxi");
  // debug();
  expect(getByText("home 15502980060")).not.toBeNull();
  done();
});

it("should fill contact form and create new contact", async done => {
  const formValues = {
    address: "xi'an",
    gender: "女",
    name: "dyw",
    tags: ["中介", "外卖"],
    telphone: { mobile: 15502980080, type: "work" }
  };
  nock("http://api.contacts.cn")
    .post("/api/contacts")
    .reply((uri, requestBody) => {
      // eslint-disable-next-line no-unused-vars
      const { id, ...body } = requestBody;
      expect(body).toEqual(formValues);

      mockData.push(requestBody);
      nock("http://api.contacts.cn")
        .get("/api/contacts")
        .reply(200, mockData);

      return [201, requestBody];
    });

  const { findByText, getByTestId, getByText } = render(
    ContactList,
    {
      routes: routes
    },
    () => {
      return {
        store
      };
    }
  );

  await fireEvent.update(getByTestId("name"), formValues.name);
  await fireEvent.update(getByTestId("address"), formValues.address);
  await fireEvent.update(
    getByTestId("telphone.mobile"),
    formValues.telphone.mobile
  );
  await fireEvent.update(
    getByTestId("telphone.type"),
    formValues.telphone.type
  );

  await fireEvent.click(getByTestId("gender.female"), formValues.gender);
  await fireEvent.click(getByTestId("tags.agent"));
  await fireEvent.click(getByTestId("tags.takeout"));

  await fireEvent.click(getByTestId("create-contact"));
  await findByText("dyw"); // wait for the `/api/contacts` api request
  expect(getByText("work 15502980080")).not.toBeNull();
  done();
});

it("should goto detail page", async done => {
  nock("http://api.contacts.cn")
    .get("/api/contacts/1")
    .reply(200, mockData[0]);

  //注意区分 getByTestId, findByTestId（返回异步 Promise 对象）
  const { getByTestId, findByTestId } = render(
    App,
    {
      routes
    },
    () => {
      return {
        store
      };
    }
  );
  await findByTestId("detail-link-1");
  await fireEvent.click(getByTestId("detail-link-1"));
  await findByTestId("contact-name-1");
  expect(getByTestId("contact-name-1")).toHaveTextContent("youyuxi");
  done();
});

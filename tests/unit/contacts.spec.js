import { render, fireEvent } from "@testing-library/vue";
import ContactList from "../../src/pages/ContactList/index.vue";

const nock = require("nock");

beforeEach(() => {
  nock("http://api.contacts.cn")
    .get("/api/contacts")
    .reply(200, [
      {
        id: 1,
        name: "youyuxi",
        telphone: { type: "home", mobile: "15502980060" },
        gender: "男",
        tags: ["vue"],
        address: "China"
      }
    ]);
});

it("should load contacts and display them", async done => {
  const { findByText, getByText } = render(ContactList);
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

      nock("http://api.contacts.cn")
        .get("/api/contacts")
        .reply(200, [requestBody]);

      return [201, requestBody];
    });

  const { findByText, getByTestId, getByText } = render(ContactList);
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

  fireEvent.click(getByTestId("gender.female"), formValues.gender);
  fireEvent.click(getByTestId("tags.agent"));
  fireEvent.click(getByTestId("tags.takeout"));

  fireEvent.click(getByTestId("create-contact"));
  await findByText("dyw"); // wait for the `/api/contacts` api request
  expect(getByText("work 15502980080")).not.toBeNull();
  done();
});

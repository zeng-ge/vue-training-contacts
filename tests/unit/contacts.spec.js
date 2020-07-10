import { render, waitFor } from "@testing-library/vue";
import ContactList from "../../src/pages/ContactList/index.vue";

const nock = require("nock");

beforeAll(() => {
  nock("http://api.contacts.cn")
    .get("/api/contacts")
    .reply(200, [
      {
        id: 1,
        name: "youyuxi",
        telphones: [
          { type: "home", mobile: "15502980060" },
          { type: "work", mobile: "234567890" }
        ],
        gender: "男",
        tags: ["vue"],
        address: "China"
      }
    ]);
});

it("should load contacts and display them", async done => {
  const { findByText, getByText, debug } = render(ContactList);
  // debug();
  await findByText("youyuxi");
  debug();
  expect(getByText("home 15502980060")).not.toBeNull();
  done();
});

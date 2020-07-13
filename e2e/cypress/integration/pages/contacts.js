import contacts from "../../fixtures/contacts.json";
describe("contact list", () => {
  before(() => {
    cy.server({
      method: "GET",
      delay: 500,
      status: 200,
      response: {},
    });
    cy.route("/api/contacts", contacts);
  });

  it("route to contact list", () => {
    cy.visit("/contacts");
    cy.url().should("be.contain", "/contacts");
    cy.get(".contact-item").should("have.length", 2);
  });

  it("contact list should show contacts right", () => {
    contacts.forEach((contact, index) => {
      cy.get(`.contact-item:nth(${index})`)
        .find(".contact-name")
        .should("have.text", contact.name);
    });
  });

  it("search by name should be right", () => {
    cy.get(".search-form input").type("懂{enter}");
    cy.wait(500);
    cy.get(".contact-item").should("have.length", 1);
    cy.get(".search-form input")
      .clear()
      .type("{enter}");
  });

  it("add/delete contact should be right", () => {
    const contact = {
      name: "杨永信",
      telphone: {
        type: "work",
        mobile: 123,
      },
      gender: "女",
      tags: ["中介", "外卖"],
      address: "河北",
    };
    const tagMap = {
      中介: "tags.agent",
      外卖: "tags.takeout",
      诈骗: "tags.cheat",
    };
    cy.get("[data-testid=name]").type(contact.name);
    cy.get("[data-testid='telphone.type']").select(contact.telphone.type);
    cy.get("[data-testid='telphone.mobile']").type(contact.telphone.mobile);

    const gender = contact.gender === "女" ? "gender.female" : "gender.male";
    cy.get(`[data-testid='${gender}']`).check();

    contact.tags.forEach((tag) => {
      const id = tagMap[tag];
      cy.get(`[data-testid='${id}']`).check();
    });

    cy.get("[data-testid='address']").type("雷电法王杨");

    cy.wait(1000);

    // cy.route("/api/contacts", contacts);
    cy.get("[data-testid=create-contact]").click();

    cy.wait(1000);
    cy.get(".contact-item:last-child")
      .find(".contact-name")
      .should("have.text", contact.name);

    cy.wait(1000);
    cy.get(".contact-item:last-child")
      .find(".contact-operations button:last-child")
      .click();
  });
});

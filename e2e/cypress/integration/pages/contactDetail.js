import contacts from "../../fixtures/contacts.json";
describe("contact list", () => {
  it("route to contact detail", () => {
    cy.visit("/contacts");
    cy.get(".contact-item:first-child")
      .find("button:first-child")
      .click();

    cy.wait(1000);
    cy.get(".title").should("have.text", "contact-detail");
    cy.get(".contact-property span:last-child").should("not.empty");
  });

  it("should edit contact right", () => {
    cy.get(".contact-detail .footer")
      .find("button:first-child")
      .click();
    const nameInput = () => cy.get(".contact-modal [data-testid=name]");
    const addressInput = () => cy.get(".contact-modal [data-testid=address]");
    nameInput().clear();
    cy.wait(1000);
    nameInput().type("懂王");

    let oldAddress = "";
    addressInput().then((textarea) => {
      oldAddress = textarea.val();
    });

    addressInput().type(1);

    addressInput().then((textarea) => {
      cy.wrap(oldAddress + "1").should("eq", textarea.val());
    });

    cy.get("button[data-testid=create-contact]").click();

    cy.get(".contact-detail .footer")
      .find("button:last-child")
      .click();
  });
});

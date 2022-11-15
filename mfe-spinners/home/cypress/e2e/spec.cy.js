/* eslint-disable no-undef */
describe("My First E2E Test", () => {
  it("Should add an item to the cart", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".mx-auto").click();
    cy.get("#show-login").click();
    cy.get("#login-btn").click();
    cy.get("#add-to-cart-3").click();
    cy.get("#add-to-cart-5").click();
    cy.get("#add-to-cart-2").click();
    cy.get("#show-cart-container").click();
    cy.get(".gap-3 > div:nth-child(3)").click();
    cy.get(".gap-3 > div:nth-child(7)").click();
    cy.get(".p-5:nth-child(1)").click();
    cy.get(".text-right:nth-child(12)").click();
    cy.get("div:nth-child(16)").click();
    cy.get("#add-to-cart-11").click();
    cy.get(".bg-green-900").click();
    cy.get(".flex > a:nth-child(1)").click();
    cy.get("#cart").click();
    cy.get("a:nth-child(1)").click();
    cy.get("#add-to-cart-3").click();
    cy.get("#add-to-cart-3").click();
    cy.get("#cart").click();
    cy.get("#grand-total").should("contain", "$15.98");
  });
});

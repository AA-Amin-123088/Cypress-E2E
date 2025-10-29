describe("Cypress Session Script", () => {
  beforeEach(() => {
    cy.loginUrl();
    // Ensure we are on the homepage after session restoration
    cy.visit("https://automationexercise.com/");
  });

  it("Test Case 1: Verify Features Items", () => {
    cy.xpath("//h2[normalize-space()='Features Items']").should("be.visible");
  });
    it("Test Case 2: Click to cart button", () => {
    cy.xpath("//a[normalize-space()='Cart']").click();
  });
});

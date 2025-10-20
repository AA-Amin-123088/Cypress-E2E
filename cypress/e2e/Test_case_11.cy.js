import PageObject from "../pageobject/PageObject";
describe("Cypress Session Script", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
    PageObject.loginObj.name_input_field().type(Cypress.env('username'));
    PageObject.loginObj.email_address_input_field().type(Cypress.env('password'));
  });
  
  it("Test Case 1: Verify Features Items", () => {
    console.log('test-1');
  });

  it("Test Case 2: Scroll to Bottom", () => {
    console.log('test-2');
  });
});

// npx cypress run --spec "cypress/e2e/Test_case_11.cy.js" --env baseUrl=https://automationexercise.com/login,username=tania,password=tania12@gmail.com


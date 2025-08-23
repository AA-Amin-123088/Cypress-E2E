// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("loginUrl", () => {
  cy.session(
    "loginSession",
    () => {
      // cy.clearCookies();
      // cy.clearLocalStorage();
      // cy.window().then((win) => win.sessionStorage.clear());
      cy.visit("https://automationexercise.com/login");
      cy.xpath("//input[@data-qa='login-email']").type("tania1212@gmail.com");
      cy.xpath("//input[@placeholder='Password']").type("tania1212");
      cy.xpath("//button[normalize-space()='Login']").click();
    },
    {
      validate: () => {
        // Validate if session is still active; if not, it will be re-created
        cy.url().should("eq", "https://automationexercise.com/");
      },
    }
  );
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

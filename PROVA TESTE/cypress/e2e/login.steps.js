import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de login", () => {
    cy.visit("https://www.automationexercise.com/login");
});

When("insiro o e-mail {string} e a senha {string}", (email, senha) => {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);
});

When("clico no botão de login", () => {
    cy.get('[data-qa="login-button"]').click();
});

Then("devo ser redirecionado para a home e visualizar o usuário logado", () => {
    cy.contains('Logged in as').should('be.visible');
    cy.url().should('not.include', '/login');
});
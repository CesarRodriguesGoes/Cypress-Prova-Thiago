import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Dado que acesso a página de login
Given("que acesso a página de login", () => {
    cy.visit("https://www.automationexercise.com/login");
});

// Quando insiro o e-mail {string} e a senha {string}
When("insiro o e-mail {string} e a senha {string}", (email, senha) => {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);
});

// E clico no botão de login
When("clico no botão de login", () => {
    cy.get('[data-qa="login-button"]').click();
});

// Então devo ser redirecionado para a home e visualizar o usuário logado
Then("devo ser redirecionado para a home e visualizar o usuário logado", () => {
    // Valida se o texto "Logged in as" está visível na página
    cy.contains('Logged in as').should('be.visible');
    // Valida se a URL não contém mais '/login'
    cy.url().should('not.include', '/login');
});
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de produtos", () => {
    cy.visit("https://www.automationexercise.com/products");
});

When("eu digito {string} no campo de busca", (produto) => {
    cy.get('#search_product').type(produto);
});

When("clico no botão de pesquisar", () => {
    cy.get('#submit_search').click();
});

Then("devo visualizar o título {string}", (tituloEsperado) => {
    cy.get('.title').should('be.visible').and('contain', tituloEsperado);
});

Then("o sistema deve exibir produtos relacionados a {string}", (produtoEsperado) => {
    cy.get('.single-products').should('be.visible');
    cy.get('.features_items').should('contain', produtoEsperado);
});
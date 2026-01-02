import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Dado que acesso a página de produtos
Given("que acesso a página de produtos", () => {
    // Clica no link de produtos na barra de navegação
    cy.visit("https://www.automationexercise.com/products");
});

// Quando eu digito {string} no campo de busca
When("eu digito {string} no campo de busca", (produto) => {
    cy.get('#search_product').type(produto);
});

// E clico no botão de pesquisar
When("clico no botão de pesquisar", () => {
    cy.get('#submit_search').click();
});

// Então devo visualizar o título "Searched Products"
Then("devo visualizar o título {string}", (tituloEsperado) => {
    cy.get('.title').should('be.visible').and('contain', tituloEsperado);
});

// E o sistema deve exibir produtos relacionados a {string}
Then("o sistema deve exibir produtos relacionados a {string}", (produtoEsperado) => {
    // Verifica se a lista de produtos contém o termo buscado
    cy.get('.single-products').should('be.visible');
    cy.get('.features_items').should('contain', produtoEsperado);
});
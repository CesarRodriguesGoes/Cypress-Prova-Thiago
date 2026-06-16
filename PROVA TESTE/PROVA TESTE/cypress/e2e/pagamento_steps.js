import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que realizo o login com {string} e senha {string}", (email, senha) => {
    cy.login(email, senha);
});

Given("que tenho o produto {string} no carrinho", (produto) => {
    cy.buscarProduto(produto);
    cy.get('.single-products').first().contains('Add to cart').click();
    cy.contains('u', 'View Cart').click();
});

When("clico no botão {string}", (botao) => {
    cy.contains(botao).click();
});

Then("devo ser redirecionado para a tela de checkout", () => {
    cy.url().should('include', '/checkout');
    cy.get('.active').should('contain', 'Checkout');
});

Then("devo validar que o produto {string} está na tabela de revisão", (produto) => {
    cy.get('#cart_info_table').should('be.visible');
    cy.get('.cart_description').should('contain', produto);
});

Then("o preço total deve ser {string}", (precoTotal) => {
    cy.get('.cart_total_price').should('contain', precoTotal);
});
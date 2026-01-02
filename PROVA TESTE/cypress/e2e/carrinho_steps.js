import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de todos os produtos", () => {
    cy.visit("https://www.automationexercise.com/products");
});

When("eu busco pelo produto {string}", (produto) => {
    cy.get('#search_product').type(produto);
    cy.get('#submit_search').click();
});

When("adiciono o produto ao carrinho", () => {
    // Foca no primeiro produto da lista e clica em Add to Cart
    cy.get('.single-products').first().within(() => {
        cy.contains('Add to cart').click();
    });
});

When("clico em {string}", (botao) => {
    cy.contains('u', botao).click();
});

Then("devo ver o produto {string} visível no carrinho", (produto) => {
    cy.get('.cart_description').should('be.visible').and('contain', produto);
});

Then("o preço deve ser exibido como {string}", (preco) => {
    // Valida se o campo contém o preço exato de Rs. 400
    cy.get('.cart_price ').should('be.visible').and('have.text', preco);
});
// Comando customizado para realizar login na plataforma
Cypress.Commands.add('login', (email, senha) => {
    cy.visit("https://www.automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Logged in as').should('be.visible');
});

// Comando customizado para buscar um produto
Cypress.Commands.add('buscarProduto', (produto) => {
    cy.visit("https://www.automationexercise.com/products");
    cy.get('#search_product').type(produto);
    cy.get('#submit_search').click();
});
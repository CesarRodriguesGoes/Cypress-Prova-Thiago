import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

let apiResponse;

Given("que envio um GET para a API do Trello", () => {
    cy.request({
        method: 'GET',
        url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
        failOnStatusCode: false // Evita que o Cypress pare o teste antes da nossa validação
    }).then((res) => {
        apiResponse = res;
    });
});

Then("o status code da resposta deve ser 200", () => {
    expect(apiResponse.status).to.eq(200);
});

Then("o campo {string} da estrutura {string} deve ser {string}", (campo, estrutura, valorEsperado) => {
    const valorObtido = apiResponse.body.data[estrutura][campo];
    
    expect(valorObtido).to.eq(valorEsperado);
    
    // Log para visualizar no Cypress Runner
    cy.log(`Valor encontrado no campo ${campo}: ${valorObtido}`);
});
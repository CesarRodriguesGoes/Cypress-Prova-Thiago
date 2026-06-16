import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

let apiResponse;

Given("que envio um GET para a API do Trello", () => {
    cy.request({
        method: 'GET',
        url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
        failOnStatusCode: false 
    }).then((res) => {
        apiResponse = res;
    });
});

Then("o status code da resposta deve ser 200", () => {
    expect(apiResponse.status).to.eq(200);
});

Then("o campo {string} da estrutura {string} deve ser {string}", (campo, estrutura, valorEsperado) => {
    // Acessa a estrutura de dados dinamicamente de forma segura
    const dadosEstrutura = apiResponse.body.data[estrutura];
    expect(dadosEstrutura).to.have.property(campo, valorEsperado);
    
    cy.log(`Sucesso! No nó '${estrutura}', o campo '${campo}' retornou: ${dadosEstrutura[campo]}`);
});
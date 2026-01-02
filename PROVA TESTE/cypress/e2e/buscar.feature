# language: pt
Funcionalidade: Busca de Produtos no Automation Exercise

  Contexto:
    Dado que acesso a página de produtos

  Cenário: Buscar por um produto existente
    Quando eu digito "Men" no campo de busca
    E clico no botão de pesquisar
    Então devo visualizar o título "Searched Products"
    E o sistema deve exibir produtos relacionados a "Men"
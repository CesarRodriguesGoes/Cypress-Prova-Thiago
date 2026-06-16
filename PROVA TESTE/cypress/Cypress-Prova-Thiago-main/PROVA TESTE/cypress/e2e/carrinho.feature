# language: pt
Funcionalidade: Adicionar Produto ao Carrinho

  Cenário: Adicionar o Summer White Top e validar o preço
    Dado que estou na página de todos os produtos
    Quando eu busco pelo produto "Summer White Top"
    E adiciono o produto ao carrinho
    E clico em "View Cart"
    Então devo ver o produto "Summer White Top" visível no carrinho
    E o preço deve ser exibido como "Rs. 400"
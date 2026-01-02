# language: pt
Funcionalidade: Validação na Tela de Pagamento

  Cenário: Validar produto no resumo do checkout
    Dado que realizo o login com "teste2024@teste.com.br" e senha "teste"
    E que tenho o produto "Summer White Top" no carrinho
    Quando clico no botão "Proceed To Checkout"
    Então devo ser redirecionado para a tela de checkout
    E devo validar que o produto "Summer White Top" está na tabela de revisão
    E o preço total deve ser "Rs. 400"
# language: pt
Funcionalidade: Login no Automation Exercise

  Contexto: 
    Dado que acesso a página de login

  Cenário: Login com credenciais válidas
    Quando insiro o e-mail "teste2024@teste.com.br" e a senha "teste"
    E clico no botão de login
    Então devo ser redirecionado para a home e visualizar o usuário logado
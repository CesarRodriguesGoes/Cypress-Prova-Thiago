# language: pt
Funcionalidade: Validação de API Trello

  Cenário: Validar consulta de action e campo name da lista
    Dado que envio um GET para a API do Trello
    Então o status code da resposta deve ser 200
    E o campo "name" da estrutura "list" deve ser "Professional"
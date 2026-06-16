📦 Entrega do Teste de Automação (Web e API)
---------------------------

Este projeto é uma demonstração de como testar um site e uma base de dados (API) de forma automática. Em vez de uma pessoa clicar em cada botão, o computador faz isso sozinho para garantir que tudo está funcionando.

---------------------------
🛠️ O que foi usado?

**Cypress:** A ferramenta que "dirige" o navegador.

**Cucumber:** Uma linguagem que permite escrever os testes em português simples (Ex: "Dado que eu clico no botão").

**JavaScript:** A "cola" que liga o texto em português aos comandos do computador.

---------------------------
🚀 Como preparar o seu computador para rodar o teste
Se você nunca rodou um código antes, siga estes 3 passos:

**Instalar o Node.js:** Ele é o motor que permite rodar o projeto. Baixe a versão "LTS" no site oficial: nodejs.org.

**Baixar este projeto:** Clique no botão verde Code (no topo desta página) e depois em Download ZIP. Extraia a pasta no seu computador.

*Instalar os componentes:*

Abra o "Prompt de Comando" ou "Terminal".

Entre na pasta onde você extraiu o projeto.

Digite o comando abaixo e aperte Enter:

Bash - npm install
(Isso vai baixar todas as ferramentas necessárias automaticamente).

---------------------------

🖥️ **Como ver a mágica acontecendo (Execução)**

*Existem duas formas de assistir aos testes:*

Opção A: Ver o robô agindo (Interface Visual)
No seu terminal, digite:

Bash - npx cypress open

Isso vai abrir uma janela. Clique em E2E Testing e depois escolha um navegador (como o Chrome). Lá, você verá uma lista de arquivos. Clique em qualquer um (ex: login.feature) e você verá o robô abrindo o site e clicando em tudo sozinho.

*Opção B: Ver apenas o resultado final (Modo Rápido)*
Se você quer apenas saber se passou ou falhou, digite no terminal:

Bash - npx cypress run

---------------------------

📂**O que foi testado?**

1 - Login: Verificamos se o sistema deixa o usuário entrar com o e-mail e senha corretos.

2 - Busca: Testamos se, ao procurar um produto, o site realmente o encontra.

3 - Carrinho: Confirmamos se o produto "Summer White Top" entra no carrinho com o preço certo de Rs. 400.

4 - Pagamento: Validamos se os itens não somem na hora de pagar.

API (Dados): Verificamos "por baixo dos panos" se o banco de dados do Trello está enviando as informações corretas.

**Candidato: César Rodrigues de Goes**
---------------------------

*Além da automação Web com Cypress e Cucumber, este projeto inclui a validação da API do Trello realizada via Postman. 
O objetivo foi demonstrar domínio em diferentes camadas de teste, utilizando scripts de validação para garantir o Status Code e a integridade de dados dinâmicos diretamente na ferramenta de desenvolvimento de APIs.*

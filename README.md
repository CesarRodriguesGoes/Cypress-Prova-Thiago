# 📦 Test Automation Challenge — Web & API (Cypress + Cucumber + Postman)

Este projeto foi desenvolvido como parte de um desafio técnico para demonstrar a criação, estruturação e execução de uma suite de testes automatizados. O projeto abrange testes de ponta a ponta (E2E) na interface do usuário (UI) e validações estruturais na camada de API.

---

## 🛠️ Tecnologias e Arquitetura

O framework foi desenhado utilizando boas práticas de automação, separando a escrita dos cenários em negócios da implementação técnica:

* **Cypress:** Motor principal de execução dos testes de UI e requisições de API.
* **Cucumber / Gherkin:** Utilizado para a escrita de cenários em comportamento (BDD) em português, facilitando a comunicação entre times técnicos e de negócios.
* **JavaScript:** Linguagem base para o desenvolvimento dos scripts de automação e comandos customizados (*Custom Commands*).
* **Postman:** Ferramenta utilizada na etapa de exploração, mapeamento e validação inicial da API do Trello.

---

## 📂 Escopo dos Testes Automatizados

### 1. Automação de Interface (UI) — *Automation Exercise*
A suite cobre os principais fluxos críticos da jornada do usuário em um e-commerce:
* **Autenticação:** Validação do fluxo de login com credenciais válidas.
* **Busca de Produtos:** Garante a eficiência e o retorno correto do motor de busca interno.
* **Carrinho de Compras:** Fluxo de adição de produto específico (`Summer White Top`) e asserção de integridade de valores (`Rs. 400`).
* **Checkout & Pagamento:** Jornada completa desde a inclusão do item até a revisão de dados na tela de checkout (`/checkout`).

### 2. Automação de API — *Trello API*
* **Validação de Contratos e Dados:** Execução de requisições `GET` simulando o consumo da API pública do Trello, validando dinamicamente o `Status Code 200` e o conteúdo de nós e objetos específicos do JSON (ex: `data.list.name`).

---

## 🚀 Pré-requisitos e Instalação

Para rodar este projeto localmente, você precisará ter instalado em sua máquina:
1. **Node.js** (Versão recomendada: LTS)

### Passo a Passo:

1. Clone o repositório ou extraia o arquivo compactado do projeto:
   ```bash
   git clone <url-do-repositorio>

2. Acesse a pasta raiz do projeto via terminal/prompt:

   ```bash
   cd nome-do-projeto

3. Instale todas as dependências necessárias do projeto rodando:

   ```bash
   npm install

## 🖥️ Execução dos Testes
O Cypress permite que você execute a suite de testes de duas formas:

*Opção A: Modo Interativo (Interface Visual)
Para abrir o Cypress Runner, acompanhar a execução passo a passo no navegador escolhido e inspecionar os elementos em tempo real:
 
      npx cypress open

*Após abrir a tela do Cypress, selecione E2E Testing, escolha o navegador de sua preferência (Ex: Chrome) e clique sobre a especificação (.feature) que deseja rodar.*
   
*Opção B: Modo Headless (Via Terminal)
Para rodar todos os testes em segundo plano de forma rápida (ideal para esteiras de CI/CD), gerando o relatório direto no console:

     npx cypress run
--------------------------------------------------------------------
📝 Nota do Desenvolvedor
Além da automação e integração da API diretamente no framework do Cypress com Cucumber, a validação inicial e o mapeamento dos endpoints da API do Trello foram realizados via Postman. Essa abordagem híbrida foi adotada para demonstrar versatilidade no uso de ferramentas de mercado e capacidade de validação em diferentes camadas da aplicação (UI e Integração), garantindo a integridade dos dados e a validação correta de status codes e payloads dinâmicos.

Candidato: César Rodrigues de Goes

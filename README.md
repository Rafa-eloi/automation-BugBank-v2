# 💸 Automação de Testes - BugBank

Este projeto foi desenvolvido como parte de uma prova técnica, com o objetivo de automatizar testes end-to-end na aplicação [BugBank](https://bugbank.netlify.app/), uma plataforma de internet banking fictícia. A automação cobre cenários reais de cadastro, login, além de antecipar os testes para funcionalidades como transferência e extrato.

## 🧪 Tecnologias Utilizadas

- ✅ Cypress
- ✅ Cucumber (Gherkin)
- ✅ Page Object Model (POM)
- ✅ Esbuild + Cucumber Preprocessor
- ✅ Node.js


## ✅ Funcionalidades Automatizadas

### 🔐 Cadastro de Usuário

- ✅ Cadastro com sucesso
- ✅ Validação de campos obrigatórios (nome, email, senha, confirmação)
- ✅ Senha e confirmação diferentes
- ✅ Validação de mensagem de sucesso no cadastro

### 🔓 Login de Usuário

- ✅ Login com sucesso
- ✅ Login com campos vazios
- ✅ Login com credenciais inválidas
- ✅ Validação de mensagem de erro
- ✅ Logout com validação de redirecionamento

### 💰 Transferência (cenários escritos)

- 🔄 Transferência entre contas válidas
- 🚫 Conta inválida
- 🚫 Valor igual ou menor que zero
- 🧾 Redirecionamento para extrato após sucesso

### 📄 Extrato (cenários escritos)

- 📈 Exibição de saldo
- 📅 Exibição de data e tipo de transações
- 🟥 Saídas com valor negativo em vermelho
- 🟩 Entradas com valor positivo em verde

> As funcionalidades de **Transferência**, **Extrato**, **Pagamento** e **Saque** ainda não estão ativas no sistema BugBank, mas os testes Gherkin, para **Transferência** e **Extrato** já foram criados para agilizar a cobertura quando forem implementadas.

---

## 📦 Instalação das Dependências

```bash
# Clone o repositório
git clone https://github.com/Rafa-eloi/automation-BugBank-v2.git
cd automation-BugBank-v2

# Instale os pacotes necessários
npm install
```
---

🚀 Como Executar os Testes
Via terminal:
```bash
# Executar todos os testes
npx cypress run

# Executar testes com tag específica (ex: @smoke)
npx cypress run --env TAGS="@smoke"

# Executar testes com navegador específico (ex: chrome)
npx cypress run --browser chrome
```

Via interface gráfica:
```bash
npx cypress open
```
---

📊 Relatórios de Execução

- Após a execução dos testes, um relatório HTML será gerado automaticamente.

✅ Como acessar:
- O relatório é publicado automaticamente via GitHub Pages após a execução da pipeline.
- Acesse o link para visualizar: https://rafa-eloi.github.io/automation-BugBank-v2

---

🔁 CI/CD - GitHub Actions
O projeto conta com uma pipeline automatizada que:

- Roda os testes todos os dias úteis às 8h da manhã ⏰
- Executa os testes automaticamente em Pull Requests
- Permite executar testes com parâmetros de tag e navegador (via workflow dispatch)
- Gera e publica os relatórios HTML no GitHub Pages

---

📌 Observações
Como a aplicação não possui banco de dados, os dados são voláteis. Portanto, o teste de login sempre cria um novo usuário via fluxo de cadastro antes de executar o login.




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

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/automation-BugBank.git
   ```



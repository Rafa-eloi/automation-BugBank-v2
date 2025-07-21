import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../../pages/loginPage';
import cadastroPage from '../../pages/cadastroPage';

//Bloco responsável por salvar um usuário sempre antes da execução, para que possa ser validado os cenários de login com sucesso e logout
Given('que o usuário já possui uma conta cadastrada', () => {
  cy.visit('/');
  cadastroPage.acessarCadastro();
  cadastroPage.preencherNome('Rafael Teste');
  cadastroPage.preencherEmail('rafael@email.com');
  cadastroPage.preencherSenha('senha123');
  cadastroPage.preencherConfirmarSenha('senha123');
  cadastroPage.selecionarSaldo();
  cadastroPage.clicarCadastrar();
  cadastroPage.validarMensagemSucesso();
});


Given("que o usuário está na tela de login", () => {
  loginPage.acessarLogin();
});

Given("que o usuário está logado como {string} e senha {string}", (email, senha) => {
  loginPage.acessarLogin();
  loginPage.preencherEmail(email);
  loginPage.preencherSenha(senha);
  loginPage.clicarBotaoAcessar();
});

When("preencher o email com {string}", (email) => {
  loginPage.preencherEmail(email);
});

When("preencher a senha com {string}", (senha) => {
  loginPage.preencherSenha(senha);
});

When("clicar no botão {string}", (botao) => {
  if (botao === "Acessar") {
    loginPage.clicarBotaoAcessar();
  } else if (botao === "Sair") {
    loginPage.clicarBotaoSair();
  }
});

Then("deve exibir a mensagem {string}", (mensagem) => {
  loginPage.verificarMensagemCampoObrigatorio(mensagem);
});

Then("deve visualizar a mensagem de boas-vindas com o nome {string}", (nome) => {
  loginPage.verificarMensagemBoasVindas(nome);
});

Then("deve ser redirecionado para a tela de login", () => {
  loginPage.verificarRetornoLogin();
});

Then("deve exibir a mensagem de erro no modal {string}", (mensagem) => {
  loginPage.verificarMensagemErro(mensagem);
});

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import cadastroPage from '../../pages/cadastroPage';

Given("que o usuário acessa a página de cadastro", () => {
  cy.visit("/");
  cadastroPage.acessarCadastro();
});

When("preencher o nome com {string}", (nome) => {
  cadastroPage.preencherNome(nome);
});

When("preencher o email com {string}", (email) => {
  cadastroPage.preencherEmail(email);
});

When("preencher a senha com {string}", (senha) => {
  cadastroPage.preencherSenha(senha);
});

When("preencher a confirmação de senha com {string}", (senha) => {
  cadastroPage.preencherConfirmarSenha(senha);
});

When("ativar a opção {string}", () => {
  cadastroPage.selecionarSaldo();
});

When("clicar no botão {string}", () => {
  cadastroPage.clicarCadastrar();
});

Then("a conta deve ser criada com saldo de R$ 1.000,00", () => {
  cadastroPage.validarMensagemSucesso();
});

Then("deve ser exibido o número da conta criada", () => {
  cadastroPage.validarMensagemSucesso();
  cadastroPage.fecharModal();
});

Then("deve ser exibida a mensagem {string}", (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});

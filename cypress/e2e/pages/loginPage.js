import { loginElements } from "../elements/loginElements"

class LoginPage {
  acessarLogin() {
    cy.visit('/');
  }

  preencherEmail(email) {
    cy.get(loginElements.campoEmail).first().type(email, { force: true });
  }

  preencherSenha(senha) {
    cy.get(loginElements.campoSenha).first().type(senha, { force: true });
  }

  clicarBotaoAcessar() {
    cy.get(loginElements.botaoAcessar).click({ force: true });
  }

  verificarMensagemErro(mensagem) {
    cy.get(loginElements.modalErro).should('contain.text', mensagem);
  }

  verificarMensagemCampoObrigatorio(mensagem) {
    cy.get(loginElements.mensagemErro).should('contain.text', mensagem);
  }

  verificarMensagemBoasVindas(nome) {
    cy.get(loginElements.mensagemBoasVindas)
      .should('be.visible')
      .and('contain.text', `Olá ${nome},`);
  }

  clicarBotaoSair() {
    cy.get(loginElements.botaoSair).click({ force: true });
  }

  verificarRetornoLogin() {
    cy.get(loginElements.botaoAcessar).should('be.visible');
  }
}

export default new LoginPage();

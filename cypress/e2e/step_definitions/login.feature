Feature: Login
  
    Scenario: Tentativa de login sem preencher campos obrigatórios
        Given que o usuário está na tela de login
        When clicar no botão "Acessar"
        Then deve exibir a mensagem "Usuário e senha precisam ser preenchidos"

    Scenario: Tentativa de login com usuário inválido
        Given que o usuário está na tela de login
        When preencher o email com "email@invalido.com"
        And preencher a senha com "senhaErrada"
        And clicar no botão "Acessar"
        Then deve exibir a mensagem de erro no modal "Usuário ou senha inválido"

    Scenario: Login com sucesso
        Given que o usuário já possui uma conta cadastrada
        When preencher o email com "rafael@email.com"
        And preencher a senha com "senha123"
        And clicar no botão "Acessar"
        Then deve visualizar a mensagem de boas-vindas com o nome "Rafael Teste"

    Scenario: Logout do sistema
        Given que o usuário já possui uma conta cadastrada
        Given que o usuário está logado como "rafael@email.com" e senha "senha123"
        When clicar no botão "Sair"
        Then deve ser redirecionado para a tela de login

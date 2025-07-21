Feature: Transferência

  # Background:
  #   Given que o usuário está logado na conta

  # Scenario: Transferir para uma conta válida com saldo suficiente
  #   When o usuário preenche número da conta como "1234" e dígito como "5"
  #   And preenche o valor da transferência como "200"
  #   And preenche a descrição como "Pagamento de serviço"
  #   And confirma a transferência
  #   Then deve ver a mensagem "Transferência realizada com sucesso"
  #   And o valor deve ser debitado da conta
  #   And deve ser redirecionado para a página de extrato

  # Scenario: Transferir para uma conta inválida
  #   When o usuário tenta transferir para número da conta "9999" e dígito "0"
  #   And preenche o valor como "100"
  #   And preenche a descrição como "Teste de erro"
  #   And confirma a transferência
  #   Then deve ver a mensagem de erro "Conta inválida ou inexistente"

  # Scenario: Transferência com valor maior que o saldo disponível
  #   When o usuário tenta transferir o valor "9999"
  #   And preenche os demais campos corretamente
  #   Then a transferência não deve ser realizada
  #   And deve ver a mensagem de erro "Saldo insuficiente"

  # Scenario: Transferência com valor zero ou negativo
  #   When o usuário tenta transferir o valor "0"
  #   And preenche os demais campos corretamente
  #   Then deve ver a mensagem de erro "Valor inválido para transferência"

  # Scenario: Transferência sem preencher descrição
  #   When o usuário preenche os campos da conta e valor corretamente
  #   And não preenche a descrição
  #   And confirma a transferência
  #   Then deve ver uma mensagem de erro indicando que a descrição é obrigatória

  # Scenario: Transferência com campo de conta contendo letras
  #   When o usuário digita letras no campo número da conta ou dígito
  #   Then deve ver uma mensagem de erro "Número e dígito da conta devem conter apenas números"

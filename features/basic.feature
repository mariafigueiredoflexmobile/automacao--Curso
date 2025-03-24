Feature: Login
  Gostaria de fazer um login na aplicação
  

  Scenario: Login with sucess
    Given I fill email
    And I fill pasword
    When I top on Entrar
    Then I see the Salvar button
    

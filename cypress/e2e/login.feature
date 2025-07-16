# language: pt


Funcionalidade: Realizar o login com o email cadastrado
  
  @CadastroUsuarioELogout
  Cenário: Realizar login valido
    Dado que preencho os dados de login
    Quando envio o formulário de login
    Então devo ser redirecionado para a área logada

Cenário: Realizar login com email invalido
  Dado que estou na URL
  E informo email e senha
  Quando submeto os dados
  Então retorna email invalido
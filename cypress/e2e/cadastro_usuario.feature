# language: pt

Funcionalidade: Cadastro de novo usuário
  Como um novo visitante
  Quero criar uma conta no site
  Para acessar funcionalidades exclusivas

  Cenário: Criar novo usuário com sucesso
    Dado que estou na página de login
    Quando preencho os dados obrigatórios de cadastro
    E envio o formulário de cadastro
    E preencho os outros campos obrigatórios
    E envio o formulário para concluir o cadastro
    Então devo ver uma mensagem de sucesso ou ser redirecionado para a área logada

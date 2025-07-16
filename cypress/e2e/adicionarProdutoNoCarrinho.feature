#language: pt

@CadastroUsuario
Funcionalidade: Adicionar produto no carrinho

Cenário: Adicionar produto no carrinho com sucesso
Dado que seleciono o produto
Quando adiciono ao carrinho
E finalizo a compra
Então a compra é finalizada com sucesso 

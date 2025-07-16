When('faço uma requisição GET na API do Trello e valido o nome da lista', () => {
  cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a').then((response) => {
    expect(response.status).to.eq(200);
    // Exibe o campo 'name' da estrutura 'list' no log do Cypress
    cy.log('Nome da lista:', response.body.data.list.name);
    // Valida que o campo 'name' existe
    expect(response.body.data.list).to.have.property('name');
  });
});
import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
const { setEmailCadastrado } = require('../utils/usuario');

// Hook para garantir que o usuário seja cadastrado antes de cada cenário de login
Before({ tags: '@CadastroUsuario' }, () => {
  cy.visit('https://www.automationexercise.com/login');
  cy.get('[data-qa="signup-name"]').type('Teste Usuário');
  const email = `teste${Date.now()}@email.com`;
  setEmailCadastrado(email);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();
  // Preenche os campos obrigatórios
  cy.get('#id_gender2').check();
  cy.get('[data-qa="name"]').type('TesteQAFirst');
  cy.get('[data-qa="password"]').type('SenhaSegura123');
  cy.get('[data-qa="days"]').select('1');
  cy.get('[data-qa="months"]').select('January');
  cy.get('[data-qa="years"]').select('1990');
  cy.get('#newsletter').check();
  cy.get('#optin').check();
  cy.get('[data-qa="first_name"]').type('TesteQAFirst');
  cy.get('[data-qa="last_name"]').type('TesteQALast');
  cy.get('[data-qa="company"]').type('TesteQACompany');
  cy.get('[data-qa="address"]').type('123 Test Street');
  cy.get('[data-qa="address2"]').type('Apt 456');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').type('São Paulo');
  cy.get('[data-qa="city"]').type('São Paulo');
  cy.get('[data-qa="zipcode"]').type('90001-100');
  cy.get('[data-qa="mobile_number"]').type('1234567890');
  cy.get('[data-qa="create-account"]').click();
  cy.get('b').should('contain', 'Account Created!');
  
});
Given('que seleciono o produto', () => {
  // Acessa a seção de produtos e seleciona o primeiro produto disponível
  cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
  cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img').click();
  cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
  //cy.get('[data-qa="add-to-cart"]').click();
});

Given('que seleciono o produto {string}', (produto) => {
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click(); // Acessa a seção de produtos
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click(); //visualizar o produto
    cy.get('.product-name').contains(produto).click();
    cy.get('[data-qa="add-to-cart"]').click();
});

When('adiciono ao carrinho', () => {
    cy.get(':nth-child(5) > .btn').click(); // Clica no botão "Add to cart"        
    cy.get('u').click(); // Clica no link "View Cart"
    cy.get('.col-sm-6 > .btn').click(); // Clica no botão "Proceed to checkout"
    //cy.get('#address_delivery > .address_title > .page-subheading').should('contain', 'Your delivery address');
    //cy.get(':nth-child(7) > .btn').click(); // Clica no botão "Place Order"
    //cy.get('[data-qa="name-on-card"]').type('TesteQAFirst TesteQALast');
    //cy.get('[data-qa="card-number"]').type('5599 8830 2563 0612');
    //cy.get('[data-qa="cvc"]').type('836');
    //cy.get('[data-qa="expiry-month"]').type('01');
    //cy.get('[data-qa="expiry-year"]').type('2027');
    //cy.get('[data-qa="pay-button"]').click(); // Clica no botão "Pay and Confirm Order"
    
});

Then('finalizo a compra', () => {
    //cy.get('.col-sm-6 > .btn').click(); // Clica no botão "Proceed to checkout"
    cy.get('#address_delivery > .address_title > .page-subheading').should('contain', 'Your delivery address');
    cy.get(':nth-child(7) > .btn').click(); // Clica no botão "Place Order"
    cy.get('[data-qa="name-on-card"]').type('TesteQAFirst TesteQALast');
    cy.get('[data-qa="card-number"]').type('5599 8830 2563 0612');
    cy.get('[data-qa="cvc"]').type('836');
    cy.get('[data-qa="expiry-month"]').type('01');
    cy.get('[data-qa="expiry-year"]').type('2027');
    cy.get('[data-qa="pay-button"]').click(); // Clica no botão "Pay and Confirm Order"
    
});

Then('a compra é finalizada com sucesso', () => {
    cy.get('.col-sm-9 > p').should('contain', 'Congratulations! Your order has been confirmed!');
    cy.get('[data-qa="continue-button"]').click(); // Clica no botão "Continue"
});
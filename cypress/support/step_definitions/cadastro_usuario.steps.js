import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const { setEmailCadastrado } = require('../utils/usuario');

Given('que estou na página de login', () => {
  cy.visit('https://www.automationexercise.com/login');
});

When('preencho os dados obrigatórios de cadastro', () => {
  cy.get('[data-qa="signup-name"]').type('Teste Usuário');
  const email = `teste${Date.now()}@email.com`;
  setEmailCadastrado(email);
  cy.get('[data-qa="signup-email"]').type(email);
});


When('envio o formulário de cadastro', () => {
  cy.get('[data-qa="signup-button"]').click();
});
When('preencho os outros campos obrigatórios', () => {
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
});

When('envio o formulário para concluir o cadastro', () => {
  cy.get('[data-qa="create-account"]').click();
});

Then('devo ver uma mensagem de sucesso ou ser redirecionado para a área logada', () => {
  cy.get('b').should('contain', 'Account Created!');
  cy.get('[data-qa="continue-button"]').click();
});

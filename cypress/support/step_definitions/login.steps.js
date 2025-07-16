import { Given, When, Then, Before, AfterStep } from '@badeball/cypress-cucumber-preprocessor';
const { getEmailCadastrado, setEmailCadastrado } = require('../utils/usuario');

// Hook para garantir que o usuário seja cadastrado antes de cada cenário de login
Before({ tags: '@CadastroUsuarioELogout' }, () => {
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
  cy.get('[data-qa="continue-button"]').click();
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click(); // Clica no link "Logout"
});




Given('que preencho os dados de login', () => {
  const email = getEmailCadastrado();
  if (!email) {
    throw new Error('O email cadastrado está vazio. Certifique-se de que setEmailCadastrado foi chamado antes deste step.');
  }
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type('SenhaSegura123');
});

When('envio o formulário de login', () => {
  cy.get('[data-qa="login-button"]').click();
});

Then('devo ser redirecionado para a área logada', () => {
  cy.get(':nth-child(10) > a').should('contain', 'Logged in as Teste UsuárioTesteQAFirst');
});

Given('que estou na URL', () => {
  cy.visit('https://www.automationexercise.com/login');
});

When('informo email e senha', () => {
    cy.get('[data-qa="login-email"]').type("teste2025@teste.com.br");
  cy.get('[data-qa="login-password"]').type('SenhaSegura123');
});
When('submeto os dados', () => {
  cy.get('[data-qa="login-button"]').click();
});

Then('retorna email invalido', () => {
  cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!');
});
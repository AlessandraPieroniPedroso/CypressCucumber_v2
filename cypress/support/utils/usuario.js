// Módulo para compartilhar o email cadastrado entre os steps usando Cypress.env

function setEmailCadastrado(email) {
  Cypress.env('emailCadastrado', email);
}

function getEmailCadastrado() {
  return Cypress.env('emailCadastrado') || '';
}

module.exports = { setEmailCadastrado, getEmailCadastrado };

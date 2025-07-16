# Cypress + Cucumber + BDD

Este projeto automatiza o teste de criação de novo usuário no site https://www.automationexercise.com/login utilizando Cypress, Cucumber e BDD.

## Como rodar os testes

1. Instale as dependências:
   ```
npm install
   ```
2. Execute o Cypress:
   ```
npx cypress open
   ```

## Estrutura E2E
- `cypress/` - Testes e suporte do Cypress
- `cypress/e2e/` - Features e steps
- `cypress/support/` - Arquivos de suporte
- `cypress.config.js` - Configuração do Cypress

## Objetivo

Automatizar o fluxo de criação de novo usuário na página de login.

## Testes de API
O projeto também possui testes de API utilizando Cypress + Cucumber.

### Estrutura dos testes de API
- `cypress/servicoAPI/` - Features de API
- `cypress/support/step_definitions_servico/` - Step definitions de API

### Como rodar o teste de API
Execute:
```
npx cypress run --spec "cypress/servicoAPI/realizarGetNaAPI.feature"
```
Ou rode todos os testes (UI e API):
```
npx cypress run
```



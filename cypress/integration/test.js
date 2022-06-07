/// <reference types="Cypress" />

const { get } = require("jquery");

const URL = "127.0.0.1:8080";
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

describe('Casa de Cambio', () =>{
    before(() => {
        cy.visit(URL);
    })

    it('carga de cantidad', () => {
        cy.get('#cantidad').then(elem => {
            elem.val('200');
        })
        cy.get("#cantidad").type('{enter}');
    });

    it('seleccionar divisas', () => {
        cy.get('#currency').select('EUR');
        cy.get('#currencyTo').select('ARS');
        cy.get('#resultado').should('have.value', 24011.06);
    })

});
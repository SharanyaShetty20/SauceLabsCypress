/// <reference types="cypress" />
"experimentalSourceRewriting".true;
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe("Desktop Automation", () => {
    it('Windows - Chrome', () => {
        cy.visit("https://saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.url().should('include', 'saucedemo.com')
    })

    it('Windows - Firefox', () => {
        cy.visit("https://saucedemo.com")
        cy.title().should('eq', 'Sauce Labs')
        cy.url().should('include', 'saucedemo.com')
    })

    it.only('Mac OS - Safari', () => {
        cy.visit("https://saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.url().should('include', 'saucedemo.com')
    })

    it('Mac OS - Chrome', () => {
        cy.visit("https://saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.url().should('include', 'saucedemo.com')
    })
})
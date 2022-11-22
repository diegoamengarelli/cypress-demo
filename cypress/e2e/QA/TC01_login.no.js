/// <reference types="cypress" />

describe('Log in', function(){
    it('Log in with correct Password', function(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.clearCookies()
        cy.title().should('eq', 'ParaBank | Welcome | Online Banking')
        cy.get('input[name="username"]').click().type('john')
        cy.get('input[name="password"]').click().type('demo')
        cy.get('input[value="Log In"]').click()
        cy.title().should('eq', 'ParaBank | Accounts Overview')
        cy.contains('Accounts Overview').should('be.visible')
    })

    it('Log in with not valid Password', function(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.clearCookies()
        cy.title().should('eq', 'ParaBank | Welcome | Online Banking')
        cy.get('input[name="username"]').click().type('john')
        cy.get('input[name="password"]').click().type('test')
        cy.get('input[value="Log In"]').click()
        cy.title().should('eq', 'ParaBank | Error')
        cy.contains('An internal error has occurred and has been logged.').should('be.visible')
    })

    it('Log in with not valid Username', function(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.clearCookies()
        cy.title().should('eq', 'ParaBank | Welcome | Online Banking')
        cy.get('input[name="username"]').click().type('test')
        cy.get('input[name="password"]').click().type('demo')
        cy.get('input[value="Log In"]').click()
        cy.title().should('eq', 'ParaBank | Error')
        cy.contains('An internal error has occurred and has been logged.').should('be.visible')
    })
})
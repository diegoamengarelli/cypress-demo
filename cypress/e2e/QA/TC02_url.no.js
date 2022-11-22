/// <reference types="cypress" />

describe('url', function(){
    it('sing in', function(){
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.location('protocol').should('eq', 'https:')
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.location('pathname').should('eq', '/inventory.html')
        cy.contains('Products', {timeout:10000}).should('be.visible')
    })

    it('Add item to cart', function(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('.shopping_cart_badge').contains('1').should('be.visible')
    })

    it('Navigate to cart', function(){
        cy.get('.shopping_cart_link').click()

    })
})
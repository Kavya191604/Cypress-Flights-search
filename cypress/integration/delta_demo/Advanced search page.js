// deltaHomePage.js created with Cypress
const navigationjsondata = require('../../fixtures/navigation')
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />
//const cypress = require("cypress")



describe('example to-do app', () => {

    it('One way trip' , () => {
        // https://on.cypress.io/_

        cy.visit("https://st.delta.com/vacations/search.action")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });

        cy.fixture('navigation').then((testData) => {
           
        
        
//cy.get('input[aria-label ="Origin City Search Input. "]')

//cy.get('span.mat-option-text',{setTimeout:10000}).trigger('mouseover').click({ force: true })

        })
    })

})
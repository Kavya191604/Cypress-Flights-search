/// <reference types="cypress" />
//const cypress = require("cypress")

import signIn from '../pageObjectModel/signIn'


describe('example to-do app', () => {

    it('Demo Delta ', () => {
        // https://on.cypress.io/_

        var Signup = new signIn()

        cy.visit(" https://www.delta.com")
        //cy.contains('Sign Up').click()

        Signup.getSignIn().click()
        Signup.getFirstName().click().type('abc')
        Signup.getLastName().click().type('xyz')
        Signup.getSelectMonth().click()

        cy.login('div.idp-dropdown ul#month-desc li','Dec')
        Signup.getSelectedDate().click()
        cy.login('div.idp-dropdown ul#date-desc li','20')
        Signup.getSelceteYear().click()
        cy.login('div.idp-dropdown ul#year-desc li','1993')
        Signup.getSelectGender().click()
        cy.login('div.idp-dropdown ul#gender-desc li', 'Female')
        Signup.getSelectNextButton().click()
        cy.login('div.idp-dropdown ul#addresscountry-desc li','Australia')
        Signup.getSelectCountry().click({force:true})
        Signup.getAddress().click({force:true}).type('carrer de la vall')
        Signup.getCity().click().type('Andorra')


        //div.idp-dropdown ul#month-desc li
     
        // cy.get('ul#month-desc li:visible').each(($el, index, $list) => {
        //     // $el is a wrapped jQuery element
        //     if ($el.text() === 'Mar') {
        //         // wrap this element so we can
        //         // use cypress commands on it
            
        //         cy.wrap($el).click({force:true})
        //     }
        // })
      




    })

})
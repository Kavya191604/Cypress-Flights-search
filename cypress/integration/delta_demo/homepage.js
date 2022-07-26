// deltaHomePage.js created with Cypress
const navigationjsondata = require('../../fixtures/navigation')
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />
//const cypress = require("cypress")


const tripErrorMessage = 'I understand I may be responsible for eligible non-refundable expenses for my trip.'

describe('Booking flow without skymiles login ', () => {

    it.skip('Booking with USD', () => {
        // https://on.cypress.io/_

        cy.visit(" https://st.delta.com")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.fixture('navigation').then((testData) => {
            cy.get('#fromAirportName > .airport-code').as('frombutton')

            //From
            cy.get('@frombutton').click({ force: true })
            cy.get('#search_input').as('inputValuesfromDynamicDropdown')
            cy.get('@inputValuesfromDynamicDropdown').clear()
            cy.get('@inputValuesfromDynamicDropdown').type(testData.From)
            cy.dropDown('.airport-list a span', 'ATL')


            cy.get('#toAirportName > .airport-code').as('tobutton')
            cy.get('@tobutton').click({ force: true })
            cy.get('@inputValuesfromDynamicDropdown').clear()
            cy.get('@inputValuesfromDynamicDropdown').type(testData.To)
            cy.dropDown('.airport-list a span', 'HNL') 
            cy.trip('div.calDispValueCont', 'td.dl-datepicker-available-day a.dl-state-default')
            cy.dropDown('#passengers-desc li', testData.Passenger)
            cy.get('#btnSubmit').click({ force: true })

            //Search Page code for the vacations

            cy.url().should('include', 'search-results')

            //selecting miles
          


            //usd - Outbound flight selection
            cy.get('div.farecellgridview a.farecellinkcontainer').then($options => {
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count)
                cy.wrap($options.eq(randomIndex)).click({ force: true })
              
                //Clicking on Modal
                cy.get('#idp-refundable-modal_body--button-0').click()
               
            })

                    
                    //return flight selection

                    cy.get('div.farecellgridview a.farecellinkcontainer:visible').then($options => {
                        const count = $options.length
                        const randomIndex = Math.floor(Math.random() * count)
                        cy.wrap($options.eq(randomIndex)).click({ force: true })
                        cy.url().should('include', 'trip-summary')
                        cy.contains('Continue to Review & Pay').click()
                        // cy.get('input[id*="input_firstName"]').click().type('test')
                        // cy.get('input[id*="input_lastName"]').click().type('user')
                        // //cy.get('span[aria-describedby*="input_dobmonth"]').click()
                        // cy.randomdropdownvalueselection('span[aria-describedby*="input_dobmonth"]', 'ul[id*="input_dobmonth"] li')
                        // cy.randomdropdownvalueselection('span[aria-describedby*="input_dobday"]', 'ul[id*="input_dobday"] li')
                        // cy.get('span[aria-describedby*="input_dobyear"]').click()
                        // cy.dropDown('ul[id*="input_dobyear"] li', '1990')
                        // cy.get('span[aria-describedby*="input_gender"]').click()
                        // cy.dropDown('ul[id*="input_gender"] li', 'Male')

                        // //contact Info

                        // cy.get('input#input_phoneNumberCI').click().type('8134332345')
                        // cy.get('input#input_emailCI').click().type('kavya.g@delta.com')

                        //Trip Protection No

                        // cy.get('div[class*="allianz-insuranceAvailable"] label[class*="NoDefault"]').click()
                        // cy.get('div[class*="allianz-insuranceAvailable"] label[class*="allianz-NoSelected"] div'). then(($textValue) =>
                        // {
                        //     if($textValue.contains(tripErrorMessage))
                        //     {
                        //         cy.log("pass")
                        //     }
                        // })

                        // //Trip Protection Yes
                        // cy.get('label[class*="allianz-Green"]').click()
                        // cy.get('input#protectTrip').check()

                        //Credit Card Deatils

                        // cy.get('input[name="paymentCardNum"]').click().type('370100000000000')

                        // cy.get('input[id*="id_expirationDate"]').click().type('1022')
                        // cy.get('input[id*="id_paymentCardSecurityCode"]').click().type('370')
                        // cy.get('input[id*="id_nameOnCard"]').click().type('test user')
                        // cy.get('input[id*="id_addressLine1Text"]').click().type('3505 windy ridge ln SE')
                        // cy.get('input[name="cityLocalityName"]').click().type('atlanta')

                        // cy.get('span[id*="id_countrySubdivisionCode_creditDebit-val"]').click()
                        // cy.dropDown('ul[id*="countrySubdivisionCode"] li', 'Alabama')

                        // cy.get('input[name="postalCode"]').type('30339')
                    })
                })
            })
it.skip('Booking with Miles', () => {

            cy.visit(" https://st.delta.com")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.fixture('navigation').then((testData) => {
            cy.viewport(1280,800)
            cy.get('#fromAirportName > .airport-code').as('frombutton')

            //From
            cy.get('@frombutton').click({ force: true })
            cy.get('#search_input').as('inputValuesfromDynamicDropdown')
            cy.get('@inputValuesfromDynamicDropdown').clear()
            cy.get('@inputValuesfromDynamicDropdown').type(testData.From)
            cy.dropDown('.airport-list a span', 'ATL')


            cy.get('#toAirportName > .airport-code').as('tobutton')
            cy.get('@tobutton').click({ force: true })
            cy.get('@inputValuesfromDynamicDropdown').clear()
            cy.get('@inputValuesfromDynamicDropdown').type(testData.To)
            cy.dropDown('.airport-list a span', 'HNL') //will explain you while creating the framework
            cy.trip('div.calDispValueCont', 'td.dl-datepicker-available-day a.dl-state-default')
            cy.dropDown('#passengers-desc li', testData.Passenger)
            cy.get('#btnSubmit').click({ force: true })

            //Search Page code for the vacations

            cy.url().should('include', 'search-results')
            cy.get('span[class*="float-left"]').click() //click on sort-filtter 
            cy.get('label[for*="stopType_1"]').click()
            cy.get('div[class*="nonstop"]').should('be.visible') //validating Nonstop tag

            //selecting miles
            cy.get('label[class*="btn-moneymiles ng"] ').click()
            //usd - Outbound flight selection
           for(var i=0;i<2;i++)
            cy.get('div.farecellgridview a.farecellinkcontainer').then($options => {
                
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count)
                cy.wrap($options.eq(randomIndex)).click({ force: true })
            //locator for details -->div[class*="detailsInfo"] a  span[class="ng-star-inserted"]
            
                cy.wait(10000)

            
                        
           
        })
            cy.get('dt[class*="headingOne mb-2"] h3').should('be.visible')
    })
})

it.skip('switching from with Miles to USD on review page', () => {

        cy.visit(" https://st.delta.com")
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.fixture('navigation').then((testData) => {
        cy.viewport(1280,800)
        cy.get('#fromAirportName > .airport-code').as('frombutton')

        //From
        cy.get('@frombutton').click({ force: true })
        cy.get('#search_input').as('inputValuesfromDynamicDropdown')
        cy.get('@inputValuesfromDynamicDropdown').clear()
        cy.get('@inputValuesfromDynamicDropdown').type(testData.From)
        cy.dropDown('.airport-list a span', 'ATL')


        cy.get('#toAirportName > .airport-code').as('tobutton')
        cy.get('@tobutton').click({ force: true })
        cy.get('@inputValuesfromDynamicDropdown').clear()
        cy.get('@inputValuesfromDynamicDropdown').type(testData.To)
        cy.dropDown('.airport-list a span', 'HNL') //will explain you while creating the framework
        cy.trip('div.calDispValueCont', 'td.dl-datepicker-available-day a.dl-state-default')
        cy.dropDown('#passengers-desc li', testData.Passenger)
        cy.get('#btnSubmit').click({ force: true })
        //Search Page code for the vacations

        cy.url().should('include', 'search-results')
        //usd - Outbound flight selection
       
        cy.get('div.farecellgridview a.farecellinkcontainer').then($options => {
            
            const count = $options.length
            const randomIndex = Math.floor(Math.random() * count)
            cy.wrap($options.eq(randomIndex)).click({ force: true })

            //Clicking on Modal
            cy.get('#idp-refundable-modal_body--button-0').click() 
            
            cy.wait(10000)

            //selecting miles
            cy.get('label[for="MILES"]').click()
            cy.get('#cancelButton').click() //cancel button for USD to miles modal
            cy.url().should('include','return?')

            //Validating the usd to miles after click on continue
            cy.get('label[for="MILES"]').click()
            cy.get('#continueButton').click()
            cy.url().should('include','search-results?')
            cy.get('span[class="headingintro"]').should('contains.text','Outbound')
        })
    })
})


it.only('Modified Booking flow', () => {

    cy.visit(" https://st.delta.com")
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
cy.fixture('navigation').then((testData) => {
    cy.viewport(1280,800)
    cy.get('#fromAirportName > .airport-code').as('frombutton')

    //From
    cy.get('@frombutton').click({ force: true })
    cy.get('#search_input').as('inputValuesfromDynamicDropdown')
    cy.get('@inputValuesfromDynamicDropdown').clear()
    cy.get('@inputValuesfromDynamicDropdown').type(testData.From)
    cy.dropDown('.airport-list a span', 'ATL')


    cy.get('#toAirportName > .airport-code').as('tobutton')
    cy.get('@tobutton').click({ force: true })
    cy.get('@inputValuesfromDynamicDropdown').clear()
    cy.get('@inputValuesfromDynamicDropdown').type(testData.To)
    cy.dropDown('.airport-list a span', 'HNL') //will explain you while creating the framework
    cy.trip('div.calDispValueCont', 'td.dl-datepicker-available-day a.dl-state-default')
    cy.dropDown('#passengers-desc li', testData.Passenger)
    cy.get('#btnSubmit').click({ force: true })
    //Search Page code for the vacations

    cy.url().should('include', 'search-results')
    //usd - Outbound flight selection
   
    cy.get('div.farecellgridview a.farecellinkcontainer').then($options => {
        
        const count = $options.length
        const randomIndex = Math.floor(Math.random() * count)
        cy.wrap($options.eq(randomIndex)).click({ force: true })

        //Clicking on Modal
        cy.get('#idp-refundable-modal_body--button-0').click() 
        
        cy.wait(10000)


    })

    cy.get('div.farecellgridview a.farecellinkcontainer:visible').then($options => {
        const count = $options.length
        const randomIndex = Math.floor(Math.random() * count)
        cy.wrap($options.eq(randomIndex)).click({ force: true })


        cy.get('span[class*="open-flyout"]:visible').trigger('mouseover').click({force:true})
    }) 
    
    cy.get('@frombutton').click({ force: true })
    cy.get('#search_input').as('inputValuesfromDynamicDropdown')
    cy.get('@inputValuesfromDynamicDropdown').clear()
    cy.get('@inputValuesfromDynamicDropdown').type("New York City Area Airports, NY")
    cy.dropDown('.airport-list a span', 'NYC') //will explain you while creating the framework
   
   


    cy.get('#toAirportName > .airport-code').as('tobutton')
    cy.get('@tobutton').click({ force: true })
    cy.get('@inputValuesfromDynamicDropdown').clear()
    cy.get('@inputValuesfromDynamicDropdown').type(testData.From)
    cy.dropDown('.airport-list a span:visible', 'ATL')
    cy.trip('div.calDispValueCont', 'td.dl-datepicker-available-day a.dl-state-default')
    cy.get('.donebutton').click()
    cy.get('input#refundableFlightsOnly').click({force:true})
    cy.get('#btnSubmit').click({ force: true })

    cy.get('div[class*="cabininfolink"]:visible').eq(0).click() //main option
    cy.get('div[class*="row text-center"] h3[class*="brandnametext"]:visible').should('contain.text',' Refundable Main ')
    cy.get('div[class*="comparison-experience"] span[class*="comparison-experience-link"]:visible').click()
    cy.get('h2[class*="title "]:visible').should('contain.text','Compare Experiences')
     
    for(var i=0;i<2;i++){
    cy.get('.icon-Close-x:visible').click({force:true})
    }

    cy.get('div[class*="cabininfolink"]:visible').eq(1).click()
    cy.get('div[class*="row text-center"] h3[class*="brandnametext"]:visible').should('contain.text',' Refundable Delta Comfort+ ')
    cy.get('.icon-Close-x:visible').click({force:true})

    
    cy.get('div[class*="cabininfolink"]:visible').eq(2).click()
    cy.get('div[class*="row text-center"] h3[class*="brandnametext"]:visible').should('contain.text',' Refundable First ')
    cy.get('.icon-Close-x:visible').click({force:true})

    cy.get('div.farecellgridview a.farecellinkcontainer').then($options => {
        
        const count = $options.length
        const randomIndex = Math.floor(Math.random() * count)
        cy.wrap($options.eq(randomIndex)).click({ force: true })

        
    
        
        cy.wait(10000)


    })

    cy.get('div.farecellgridview a.farecellinkcontainer:visible').then($options => {
        const count = $options.length
        const randomIndex = Math.floor(Math.random() * count)
        cy.wrap($options.eq(randomIndex)).click({ force: true })

    })
   
})
    
    })
})



const jsondata = require('../../fixtures/navigation')

describe('example to-do app', () => {


    it('Demo Delta ', () => {
           // cy.contains('Travel Info').trigger('mouseover')
        //  cy.contains('Travel Planning Center').click({force:true})
        //  cy.url().should('contain','travel')
        //  cy.get(-1)
        cy.fixture('navigation').then((testData) => {
            cy.visit("https://www.delta.com/content/www/global/en/delta-vacations.html")
            cy.validatingUrl('Travel Info', 'Delta Vacations', 'delta-vacations')
            cy.contains('Advanced Search Options').invoke('removeAttr', 'target').click({ force: true })
            cy.get('div #standard-flightHotel input[name="fromAirport"]').click()
                .clear().type(testData.From)
            cy.get('div #standard-flightHotel input[name="toAirport"]').click()
                .clear().type(testData.To)
            cy.get('#depart-standardFlightHotel').click()
            

            for(var i=0;i<2;i++)
            {
            cy.get('.calenderDepartSpan').click({ force: true })
            cy.get('td[data-handler="selectDay"] a.ui-state-default').then($options => {
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count)
                cy.wrap($options.eq(randomIndex)).click({ force: true })
            })
        }
           
            cy.get('span#noOfRooms-button').click({ force: true })
            cy.dropDown('#noOfRooms-menu li', '2 Rooms')
            cy.get('div.room-tab-head').should('be.visible') //validate the room tab
             cy.get('#noOfAdults-button').click()
            cy.dropDown('#noOfAdults-menu li', '4 Adults')
             cy.get('#noOfChildren-button').click()
             cy.dropDown('#noOfChildren-menu li', '1 Child')
             cy.get('li[data-id="tab-2"]').click()
             cy.get('span[aria-owns="aduntNo2-menu"]').click()
             cy.dropDown('ul#aduntNo2-menu li', '2')
            cy.get('#childNo2-button').click()
            cy.dropDown('ul#childNo2-menu li','1')
            //cy.get('span[aria-owns="flightCarchildAgeDiv0-menu"]').click()
            //cy.get('div.age-switch-holder-flight-car').click()
            cy.get('#childAge21-button').click()
            cy.dropDown('ul#childAge21-menu li','6')
            cy.get('div.float-right button[class*="primaryLarge"]').click()


            

            //cy.get('ul#eachRoomTabHotelFlight li[class="room-tab"]').click({force:true})

            

           // cy.roomselection('div.room-tab-head','div.room-tab-info select[class = "class-adult-no small"]')
                

            //cy.get('span#aduntNo1-button').click()
            //cy.login('ul#aduntNo1-menu li', '3')






            //cy.get('.sidebar').scrollTo('bottom')
            //     cy.get(':nth-child(3) > .panel-heading > .h4 > .nav-item :visible').click()

            //     //cy.get(':nth-child(3) > .panel-heading > .h4 > .nav-item').click()
            //     //cy.get('.desc > :nth-child(1)').should('be.visible')
            //     cy.get('.desc > :nth-child(1)').should('have.text')
            //    // cy.go('back')
            //      cy.go(-1)
            //     cy.get('.inspiration-sub-nav-link').click()
            //     cy.get(':nth-child(5) > .panel-heading > .h4 > .nav-item').click()
            //     cy.get(':nth-child(2) > .h1').should('have.text','')
            //     cy.go('back')


        })

    })

})


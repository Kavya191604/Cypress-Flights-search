describe('Verify different components on Delta Vacations Widget page', () => {

    before(function () {
       // cy.visit('us/en/delta-vacations')
       cy.visit('https://st.delta.com/content/www/global/en/delta-vacations.html')
    })
    it('Delta Vacations Widget page should be displayed', () => {

        cy.get('.dlv-booking-widget').should('be.visible')
      cy.dropDown('div.dlv-tab-header','Flight + Car')
        //cy.scrollTo('top')
    
        // https://on.cypress.io/_

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    });

          //Validating the form fields 
          
          it('validate Form field labels are displayed', () => {
            cy.get('from-airport-input > .mat-tooltip-trigger > label').should('have.text', " Origin ")
            cy.get('to-airport-input > .mat-tooltip-trigger > label').should('have.text'," Destination ")
            cy.get('#DepartureLabel').should('have.text',"Depart") 
            cy.get('#returnLabel').should('have.text',"Return")
            cy.get('.col > label').should('have.text',"Passenger")
            cy.get('#promoCodeLabel').should('have.text',"Delta Vacations Promo Code/eCERT (Optional)")
            cy.scrollTo('top')
        })

        it('validate Airport City display or not when User enter market information in the search form', () => {
            cy.get('#booking-widget-container').should('be.visible')
            cy.get('#fromAirport').should('be.visible')
            cy.get('#fromAirport').click()
            cy.get('#fromAirport .container').should('be.visible')
            cy.get('#dialog-close').should('be.visible')
            cy.get('#dialogInput').should('be.visible')
            cy.get('#searchAll').should('be.visible')
            cy.get('#dialogInput').type('ATL')
            cy.get('#dialog-close').click()
            cy.get('#toAirport').should('be.visible')
            cy.get('#toAirport').click()
            cy.get('#toAirport .container').should('be.visible')
            cy.get('#dialog-close').should('be.visible')
            cy.get('#dialogInput').should('be.visible')
            cy.get('#searchAll').should('be.visible')
            cy.get('#dialogInput').type('SFO')
            cy.get('#dialog-close').click()
        })

        it('validate calendar section in Widget page', () => {
            cy.get('#vacationsDepartureDate').should('be.visible')
            cy.get('#departureDateSection .bi').should('be.visible')
            cy.get('#vacationsDepartureDate').click()
            cy.get('.right > .btn > .ngb-dp-navigation-chevron').click()
            cy.get(':nth-child(1) > .btn > .ngb-dp-navigation-chevron').click()
            cy.get('.ngb-dp-day ng-star-inserted,[role=gridcell]:eq(57)').click()
            cy.get('#vacationsReturnDate').should('be.visible')
            cy.get('#returnDateSection .bi').should('be.visible')
            cy.get('#vacationsReturnDate').click()
            cy.get(':nth-child(1) > .btn > .ngb-dp-navigation-chevron').click()
            cy.get('.ngb-dp-day ng-star-inserted,[role=gridcell]:eq(20)').click()
        })

        it('validate number of passenger display in passenger dropdown', () => {
            cy.get('#adultCount').should('be.visible')
            cy.get('#adultCount').click()
            cy.get('div.mat-autocomplete-panel mat-option span').should('have.length', 9)
            cy.get('div.mat-autocomplete-panel mat-option span').eq(1).click()
        })

        it('validate Promo Code Section', () => {
            cy.get('#promoCode').click()
            cy.get('#promoCodeTooltipIcon').should('be.visible')
            cy.get('#promoCodeTooltipIcon').click({force:true})
            cy.get('.panel #tooltip-container').should('be.visible')
            cy.get('.panel-heading > h2').should('contain.text', 'Promo Code or eCertificate')
            cy.get('#dialog-close').click()
            cy.get('#promoCode').type('SMDISCOVER')
            //cy.get('#SMSection > [mattooltipclass="toolTipError"] > label').should('be.visible')
            cy.get('#skyMilesTooltipIcon').should('be.visible')
            cy.get('#skyMilesTooltipIcon').click({force:true})
            cy.get('#tooltip-container').should('be.visible')
            cy.get('.panel-heading > h2').should('contain.text', 'SkyMiles Number')
            cy.get('#dialog-close').click()
            cy.get('#skyMilesNumber').click()
            cy.get('#skyMilesNumber').type('8007386587')
            cy.get('#promoCode').clear()
        })

        it('Validate header',() =>{

            cy.get('ul#navPrimary li a').should('be.visible')
            cy.get('ul#navPrimary li').eq(1).should('have.text','BOOK')
            cy.get('div[class*="signup"] a').should('have.text','Sign Up')
            cy.get('div[class*="login"] button').should('have.text','Log in')
            cy.contains('Advanced Search Options').should('have.text','Advanced Search Options')
        })


    




       // cy.fixture('navigation').then((testData) => {
        
            //FROM Airport
         //cy.get('#fromAirport').click({force:true})
         //cy.get('input[name="dialogInput"]').click({force:true}).clear()
        // .type(testData.FROM)
        // cy.get('mat-option span').trigger('mouseover').click({force:true})

         //TO Airport
         //cy.get('#toAirport').click({force:true})
         //cy.get('input[name="dialogInput"]').click({force:true}).clear()
         //.type(testData.TO)
         //cy.get('input#dialogInput').click()
        // cy.get('input[name="dialogInput"]').click().clear().type(testData.TO)
         //cy.dropDown('mat-option span','ORD')
        // cy.get('span[class="mat-option-text"]').click()

        
        
            // cy.get('#mat-select-0').should('contain.text', '2 Adults')
            // cy.get('#adultCount').click()
            // cy.get('#mat-autocomplete-0').find('.mat-option-text').should('have.length', 9)
            // cy.get('#mat-option-2 > .mat-option-text').click()

            //cy.get('input#adultCount').click()
           // cy.login('div.mat-autocomplete-panel mat-option span','3 Adults')
        //    cy.get('input#adultCount').click({ force: true })
        //     cy.get('div.mat-autocomplete-panel mat-option span').then($options => {
        //         const count = $options.length
        //         const randomIndex = Math.floor(Math.random() * count)
        //         cy.wrap($options.eq(randomIndex)).click({ force: true })

               // cy.randomdropdownvalueselection('input#adultCount','div.mat-autocomplete-panel mat-option span')

                //cy.randomdropdownvalueselection('input#vacationsDepartureDate','div[class = "btn-light ng-star-inserted"]')
                //div [class^="btn-light ng-star-inserted"]
                //dlv-tab-header ng-star-inserted

                //cy.randomdropdownvalueselection('input#vacationsReturnDate','div[class="btn-light ng-star-inserted"]')
                //cy.validatingUrls('a.componentLink h3.card-headertxt', 'U.S. GETAWAYS','U.S. GETAWAYS','us-getaways?')
                


        
    })

    

    
        


        


    

    


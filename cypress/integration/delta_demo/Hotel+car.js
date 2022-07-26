const jsondata = require('../../fixtures/Hotel+car')

describe('Validating the package type Hotel and car', () => {

  
    it('Delta Vacations Widget page should be displayed', () => {
  
      
  
      // https://on.cypress.io/_
  
      cy.visit('https://www.delta.com/content/www/global/en/delta-vacations.html') //visiting URL
  
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

      cy.fixture('Hotel+car').then((jsonData) => {
  
         cy.url().should('include','delta-vacations')
         
        // cy.contains('Go Beyond the Flight').should('include.text',jsonData.GoBeyondtheFlight) 
        //    cy.contains('Flight + Hotel (+Car/Transfers)').should('include.text','Flight + Hotel (+Car/Transfers)')
        //    cy.contains('Flight + Car').should('include.text','Flight + Car')
        //    cy.contains('Hotel + Car/Transfers').should('include.text','Hotel + Car/Transfers')
        //    cy.contains('Destination Weddings').should('include.text','Destination Weddings')
        //    cy.contains('Honeymoons').should('include.text','Honeymoons')
        //    cy.contains('Hotel Location').should('include.text','Hotel Location')
        //    cy.contains('Check-in').should('include.text','Check-in')
        //    cy.contains('Check-out').should('include.text','Check-out')
        //    cy.contains('Passengers').should('include.text','Passengers')
        //    cy.contains('Delta Vacations Promo Code/eCERT (Optional)').should('include.text','Delta Vacations Promo Code/eCERT (Optional)')
        //    //cy.contains('SkyMiles').should('include.text','SkyMiles')
        //    cy.contains('Search').should('include.text','Search')
  
           
  
  
        //cy.contains('Log in').should('include.text', 'Log in')
        //cy.get('.login-btn').click()
        //cy.contains('Log In To Delta').should('include.text', 'Log In To Delta')
        // cy.contains('SkyMiles Number Or Username').should('include.text', 'SkyMiles Number Or Username')
        //cy.get('#userId').click({force:true}).clear().type(testData.skymiles)
  
        //cy.get('#password').click({force:true}).clear().type(testData.Password)
        //cy.get('div.loginButtonDiv').click()
        // cy.wait(9000)
        //cy.get('div.logged-user-section span.name:visible',{setTimeout:10000}).trigger('mouseover').click()
        //cy.wait('@PersonalInfo').trigger('mouseover').click()
  
       // cy.get('div.logged-user-section span.name:visible').click({force:true})
  
       cy.packagesTab('Hotel + Car/Transfers')
      
                
      
    })
  })
  })
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '../support/commands';
var result = '';
 Cypress.Commands.add("dropDown", (clickingonthedropdown, selectingthevaluesfromdropdown) => {
    cy.get(clickingonthedropdown).each(($listValue, index, $list) => {
       
        if ($listValue.text().includes(selectingthevaluesfromdropdown)) {
           cy.wrap($listValue).click({ force: true })
        }
    }) 
})


Cypress.Commands.add("randomdropdownvalueselection", (clickingonthedropdown, selectingthevaluesfromdropdown,length) => {
 cy.get(clickingonthedropdown).click({ force: true })

 for(var i=0; i<length;i++)
 {
 cy.get('button[title="Next month"]').click({force:true})
 }
    cy.get(selectingthevaluesfromdropdown).then($options => {
        const count = $options.length 

        const randomIndex = Math.floor(Math.random() * count) 
         if(randomIndex > 28 || randomIndex <= 1 )
         {
            const newValue = Math.floor(Math.random() * randomIndex)
            cy.wrap($options.eq(newValue)).click({ force: true }) 
        }
        else {
               cy.wrap($options.eq(randomIndex)).click({ force: true }) 
       }
     
    })
    
})


Cypress.Commands.add("validatingUrl", (parentNavigation, childNavigation, urlValidation) => {
    cy.contains(parentNavigation).trigger('mouseover')
    cy.contains(childNavigation).click({ force: true })
    cy.url().should('contain', urlValidation)
   // cy.get(-1)
})
Cypress.Commands.add("validatingUrls", (clickonlinkUrls, selectingthevaluesfromthelist, urlValidation) => {
cy.get(clickonlinkUrls).each(($listValue, index, $list) => { 
    // $el is a wrapped jQuery element
    // use cypress commands on it
 
    if ($listValue.text().includes(selectingthevaluesfromthelist)) 
    {
        cy.wrap($listValue).invoke('removeAttr','target').click({ force: true })
        
        cy.url().should('contain', urlValidation)
      
        cy.visit('/content/www/global/en/delta-vacations.html')
    }
    
})

})





// calenderlocator ==>.calenderDepartSpan
// randomvaluefromcalender ==>td.dl-datepicker-available-day

Cypress.Commands.add("trip", (calenderlocator, randomvaluefromcalender) => {
const tripType = 'Round Trip'
    
    switch (tripType) {
        case 'One Way':
            cy.dropDown('#selectTripType-desc li', 'One Way')
            cy.get(calenderlocator).click({ force: true })
            cy.get(randomvaluefromcalender).then($options => {
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count)
                cy.wrap($options.eq(randomIndex)).click({ force: true })
                cy.get('.donebutton').click()
            })
            break;
            case 'Round Trip':
                cy.dropDown('#selectTripType-desc li', 'Round Trip')
                cy.get(calenderlocator).click({ force: true })
                for(var i=0 ;i<2;i++)
                {
                cy.get(randomvaluefromcalender).then($options => {
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count)
                cy.wrap($options.eq(randomIndex)).click({ force: true })
               // cy.get('.donebutton').click()
                //cy.wait(3000)
                })
                
            }
            break;  
        }
    })
Cypress.Commands.add("PassengerSelection", (firstnamelocator,firstnamevalue,lastnamelocator,lastnamevalue)=> {
    
    cy.get(firstnamelocator).click({force:true}).clear().type(firstnamevalue)
    cy.get(lastnamelocator).click({force:true}).clear().type(lastnamevalue)

})

Cypress.Commands.add("randombuttonselection", (selectbutton)=> {
      cy.get(selectbutton).then($options => {
        const count = $options.length
        const randomIndex = Math.floor(Math.random() * count)  
        cy.wrap($options.eq(randomIndex)).click({ force: true })
      })
    })

    Cypress.Commands.add("Buttonselection",(buttonselection, nextbutton, urlvalidation)=>{
        cy.randombuttonselection(buttonselection)
                  cy.get(nextbutton).click()
                      cy.url().should('include',urlvalidation)
     })

     Cypress.Commands.add("Passengerdetailselection",(locator, selectingvalue, passingjsondata)=>{
        cy.get(locator).click()
        cy.dropDown(selectingvalue,passingjsondata)
                  
     })

     Cypress.Commands.add("CardDetails",(cardNumber,securityCode,firstName,lastName,flag) =>
     {
        cy.get('input[id="cardNumber_0"]').click({ force: true }).type(cardNumber)
        cy.Passengerdetailselection('#selectedExpMonthCreditCards0-button','ul#selectedExpMonthCreditCards0-menu li','7')
        cy.Passengerdetailselection('#selectedExpYearCreditCards0-button','ul#selectedExpYearCreditCards0-menu li','2026')
        cy.get('#ccSecurityCode_0').click({ force: true }).type(securityCode)
        cy.get('input[id*="firstNameCre"]').click({ force: true }).type(firstName)
        cy.get('input[id*="lastNameCre"]').click({ force: true }).type(lastName)
        if(flag == true)
        {
           cy.get('input.checkBillingAddr').click()
           cy.get('#completePurchase').click()
        }
        else
        {
            cy.get('div.PaymentCardType input[id*="addressLine1"]').click().type('abc xyz')
                cy.get('input[id*="creditCardCity"]').click({ force: true }).type('Atlanta')
                cy.Passengerdetailselection('#state_0-button','ul#state_0-menu li','Georgia')
                cy.get('input[id*="zip"]').click({ force: true }).type('30339')
                cy.get('input[id*="phNumbe"]').click({ force: true }).type('3125445555')
               // cy.get('#completePurchase').click()
            
        }
     })

Cypress.Commands.add("packagenavigation", (packagelocator, packagetype)=>
{
    cy.dropDown(packagelocator, packagetype)
    cy.fixture('Commondata').then((testData) =>{
    //FROM Airport
cy.get('#fromAirport').click({ force: true })
cy.get('input[aria-label ="Origin City Search Input. "]')
.click({ force: true })
.type(testData.FROM)
cy.get('span.mat-option-text',{setTimeout:10000}).trigger('mouseover').click({ force: true })
//TO Airport
cy.get('#toAirport').click({ force: true })
// cy.get('input[name="dialogInput"]').click({force:true}).clear()
// .type(testData.TO)
// cy.get('input#dialogInput').click()
cy.get('input[aria-label ="Destination City Search Input. "]')
.click({ force: true }).type(testData.TO)
cy.dropDown('div.mat-autocomplete-panel span:visible',' Honolulu, HI (HNL) ')
cy.get('input#adultCount').click()
cy.dropDown('div.mat-autocomplete-panel mat-option span',testData.Passenger)

cy.randomdropdownvalueselection('input#vacationsDepartureDate', 'div[class = "btn-light ng-star-inserted"]','3')

cy.randomdropdownvalueselection('input#vacationsReturnDate','div[class="btn-light ng-star-inserted"]','0')
cy.get('input[id=promoCode]').click({force:true}).clear().type(testData.promocode)
cy.get('#skyMilesNumber').click({force:true}).type(testData.skymiles)
cy.get('#vacationsSubmitButton').click()
   
})
})
Cypress.Commands.add("packagesTab",(TypeofthePackage) =>
{
    //const packageType = 'Flight + Hotel (+Car/Transfers)'
         
     switch (TypeofthePackage) {
             case 'Flight + Car':
                 //cy.packagenavigation(PackageSelection,TypeofthePackage)
                
                cy.packagenavigation('div.dlv-tab-header','Flight + Car')
                cy.url().should('include','loadResults')
                cy.Buttonselection('button.select','#loadReturnFlightResults','loadReturnFlightResults')
                cy.Buttonselection('button.select','#loadAllRentalCar','loadAllRentalCar')
                cy.Buttonselection('button[class="secondary selectable "]','#loadChooseYourExtra','loadChooseYourExtra')
                cy.get('#forwardToCheckout').click({force:true})
               cy.url().should('include','travelerinfo') 
               cy.fixture('Commondata').then((jsonData) =>{
               cy.get('#adltPrefix-button').click()
                   cy.dropDown('ul#adltPrefix-menu li',jsonData.Prefixone)
                   // cy.dropDown('#adltPrefix-label',jsonData.Prefixone)
                    cy.PassengerSelection('#adltFname',jsonData.Passengerone.FirstNameone,'#adltLname',jsonData.Passengerone.LastNameone)
                    cy.Passengerdetailselection('#adltGender-button','ul#adltGender-menu li',jsonData.Passengerone.Genderone)
                   //cy.dropDown('ul#adltGender-menu li',jsonData.Genderone)
                    // cy.Passengerdetailselection('#adltMonth-button')
                    // cy.dropDown('ul#adltMonth-menu li','May')
                    cy.Passengerdetailselection('#adltMonth-button','ul#adltMonth-menu li','May')
                    cy.Passengerdetailselection('#adltDay-button','ul#adltDay-menu li','15')
                   // cy.dropDown(
                   cy.Passengerdetailselection('#adltYear-button','ul#adltYear-menu li','1990')
                   // cy.dropDown()
               
                cy.get('#phone').click({ force: true }).type(jsonData.Phone)
                cy.get('#addrLine1').click({ force: true }).type(jsonData.Address)
                cy.get('#city').click({ force: true }).type(jsonData.City)
                cy.Passengerdetailselection('#state-button','ul#state-menu li','Georgia')
                cy.get('#zip').click({ force: true }).type(jsonData.Zipcode)
                cy.get('#emailAddr').click({ force: true }).type(jsonData.Email)
                cy.get('#confirmEmailAddr').click({ force: true }).type(jsonData.Confirmemail)
                cy.get('span[id ="chPrefix1-button"]').click({ force: true })
                cy.get('div.ui-selectmenu-menu').find('ul#chPrefix1-menu li').eq(3).should('contain.text',jsonData.Childprefix).click({ force: true })
               // cy.dropDown('div.ui-selectmenu-menu ul#chPrefix1-menu li',jsonData.Childprefix)
                cy.PassengerSelection('input#chFname1',jsonData.FirstNametwo,'input#chLname1',jsonData.LastNametwo)
                cy.Passengerdetailselection('#adltFlyerGender1-button','ul#adltFlyerGender1-menu li',jsonData.Gendertwo)
                cy.Passengerdetailselection('#dobMonth1-button','ul#dobMonth1-menu li','May')
                
                cy.Passengerdetailselection('#dobDay1-button','ul#dobDay1-menu li','15')
                cy.Passengerdetailselection('#dobYear1-button','ul#dobYear1-menu li','1996') 
                //Card details
                cy.get('button.primaryInline').click()
                
                cy.CardDetails(jsonData.Cardnumber,jsonData.Securitycode,jsonData.Passengerone.FirstNameone,jsonData.Passengerone.LastNameone,false)
                //Billing Address
                


                //cy.get('#activities-footer').click()
                //cy.randomdropdownvalueselection('#perADULTs_ACT_0_EVT_0_0-button',testData.ADULT)
            //    const value = cy.randombuttonselection('div.details_section div')
            //   cy.randombuttonselection('span[id*="perADULTs_ACT_"]')
            //    cy.log(value)
            //     cy.randombuttonselection(' ul[id*="perADULTs_ACT_"] li')
            //     cy.randombuttonselection('span[id*="dateOfActivity_SGT_"]')
            //     cy.randombuttonselection('div.ui-selectmenu-menu ul li')
               
                //
                //cy.randombuttonselection('button[class="secondary selectable "]')
                //cy.get('#loadChooseYourExtra').click()
               })
                break;

                case 'Flight + Hotel (+Car/Transfers)':
                 //cy.packagenavigation(PackageSelection,TypeofthePackage)
                
               
                cy.packagenavigation('div.dlv-tab-header','Flight + Hotel (+Car/Transfers)')
                cy.Buttonselection('div#hotelDetailsList button.secondary', 'button#loadOutBoundFlightResults', 'loadOutBoundFlightResults')
                cy.Buttonselection('button.select','#loadReturnFlightResults','loadReturnFlightResults')
                cy.Buttonselection('button.select','#loadChooseYourExtra','loadChooseYourExtra')
  
                cy.get('#rental-car-footer').click()
                cy.randombuttonselection('button[class="secondary selectable "]')
                cy.get('#loadChooseYourExtra').click()
                cy.get('#forwardToCheckout').click({force:true})
                cy.url().should('include','travelerinfo')
                cy.fixture('Commondata').then((jsonData) =>{
               
                   // cy.Passengerdetailselection('#adltPrefix-button','ul#adltPrefix-menu li',jsonData.Prefixone)
                   cy.get('#adltPrefix-button').click()
                   cy.dropDown('ul#adltPrefix-menu li',jsonData.Passengerone.Prefixone)
                   // cy.dropDown('#adltPrefix-label',jsonData.Prefixone)
                    cy.PassengerSelection('#adltFname',jsonData.Passengerone.FirstNameone,'#adltLname',jsonData.Passengerone.LastNameone)
                    cy.Passengerdetailselection('#adltGender-button','ul#adltGender-menu li',jsonData.Passengerone.Genderone)
                   //cy.dropDown('ul#adltGender-menu li',jsonData.Genderone)
                    // cy.Passengerdetailselection('#adltMonth-button')
                    // cy.dropDown('ul#adltMonth-menu li','May')
                    cy.Passengerdetailselection('#adltMonth-button','ul#adltMonth-menu li','May')
                    cy.Passengerdetailselection('#adltDay-button','ul#adltDay-menu li','15')
                   // cy.dropDown(
                   cy.Passengerdetailselection('#adltYear-button','ul#adltYear-menu li','1990')
                   // cy.dropDown()
               
                cy.get('#phone').click({ force: true }).type(jsonData.Phone)
                cy.get('#addrLine1').click({ force: true }).type(jsonData.Address)
                cy.get('#city').click({ force: true }).type(jsonData.City)
                cy.Passengerdetailselection('#state-button','ul#state-menu li','Georgia')
                cy.get('#zip').click({ force: true }).type(jsonData.Zipcode)
                cy.get('#emailAddr').click({ force: true }).type(jsonData.Email)
                cy.get('#confirmEmailAddr').click({ force: true }).type(jsonData.Confirmemail)
                cy.get('span[id ="chPrefix1-button"]').click({ force: true })
                cy.get('div.ui-selectmenu-menu').find('ul#chPrefix1-menu li').eq(3).should('contain.text',jsonData.Childprefix).click({ force: true })
               // cy.dropDown('div.ui-selectmenu-menu ul#chPrefix1-menu li',jsonData.Childprefix)
                cy.PassengerSelection('input#chFname1',jsonData.FirstNametwo,'input#chLname1',jsonData.LastNametwo)
                cy.Passengerdetailselection('#adltFlyerGender1-button','ul#adltFlyerGender1-menu li',jsonData.Gendertwo)
                cy.Passengerdetailselection('#dobMonth1-button','ul#dobMonth1-menu li','May')
                
                cy.Passengerdetailselection('#dobDay1-button','ul#dobDay1-menu li','15')
                cy.Passengerdetailselection('#dobYear1-button','ul#dobYear1-menu li','1996')
               
            }) 
              break;
                
                
                   
                case 'Honeymoons':
                    
                cy.packagenavigation('div.mat-tab-label-content div','Honeymoons')

                

                break;
                case 'Hotel + Car/Transfers':
                        
                    //     cy.dropDown(packagelocator, packagetype)
                    // cy.get('div.dlv-tab-header').click()
            cy.dropDown('div.mat-tab-label-content div', 'Hotel + Car/Transfers')
                cy.fixture('Commondata').then((jsonData) =>{
                    //HOTEL LOCATION
            cy.get('input#toAirport').click({ force: true })
            cy.get('input[name="dialogInput"]').click({ force: true }).clear()
                .type(jsonData.HOTELLOCATION)
            cy.get('span.mat-option-text').trigger('mouseover').click({ force: true })
            
            
            //Check-in
            cy.randomdropdownvalueselection('input#vacationsDepartureDate', 'div[class = "btn-light ng-star-inserted"]')
           //Check-out
            cy.randomdropdownvalueselection('input#vacationsReturnDate','div[class="btn-light ng-star-inserted"]')
          //passenger selection

          cy.get('input#adultCount').click()
          cy.dropDown('div.mat-autocomplete-panel mat-option span',jsonData.Passenger)
            //cy.randomdropdownvalueselection('input#adultCount', 'div.mat-autocomplete-panel mat-option span')
              
            
            //sky Miles Information:

            cy.get('input[id=promoCode]').click({force:true}).clear().type(jsonData.promocode)
            cy.get('#skyMilesNumber').click({force:true}).type(jsonData.skymiles)
            cy.get('#vacationsSubmitButton').click()


            //Hotel selection:

            cy.Buttonselection('div#hotelDetailsList button.secondary', '#loadChooseYourExtra', 'loadChooseYourExtra')
           

            //car selection:

            cy.get('#rental-car-footer').click()
            cy.randombuttonselection('button[class="secondary selectable "]')
            cy.get('#loadChooseYourExtra').click()
            cy.get('#forwardToCheckout').click({force:true})
            cy.url().should('include','travelerinfo')


            //Passenger Info

            cy.get('#adltPrefix-button').click()
            cy.dropDown('ul#adltPrefix-menu li',jsonData.Prefixone)
            // cy.dropDown('#adltPrefix-label',jsonData.Prefixone)
             cy.PassengerSelection('#adltFname',jsonData.Passengerone.FirstNameone,'#adltLname',jsonData.Passengerone.LastNameone)
             cy.Passengerdetailselection('#adltGender-button','ul#adltGender-menu li',jsonData.Passengerone.Genderone)
            //cy.dropDown('ul#adltGender-menu li',jsonData.Genderone)
             // cy.Passengerdetailselection('#adltMonth-button')
             // cy.dropDown('ul#adltMonth-menu li','May')
             cy.Passengerdetailselection('#adltMonth-button','ul#adltMonth-menu li','May')
             cy.Passengerdetailselection('#adltDay-button','ul#adltDay-menu li','15')
            // cy.dropDown(
            cy.Passengerdetailselection('#adltYear-button','ul#adltYear-menu li','1990')
            // cy.dropDown()
        
         cy.get('#phone').click({ force: true }).type(jsonData.Phone)
         cy.get('#addrLine1').click({ force: true }).type(jsonData.Address)
         cy.get('#city').click({ force: true }).type(jsonData.City)
         cy.Passengerdetailselection('#state-button','ul#state-menu li','Georgia')
         cy.get('#zip').click({ force: true }).type(jsonData.Zipcode)
         cy.get('#emailAddr').click({ force: true }).type(jsonData.Email)
         cy.get('#confirmEmailAddr').click({ force: true }).type(jsonData.Confirmemail)
         cy.get('span[id ="chPrefix1-button"]').click({ force: true })
         cy.get('div.ui-selectmenu-menu').find('ul#chPrefix1-menu li').eq(3).should('contain.text',jsonData.Childprefix).click({ force: true })
        // cy.dropDown('div.ui-selectmenu-menu ul#chPrefix1-menu li',jsonData.Childprefix)
         cy.PassengerSelection('input#chFname1',jsonData.FirstNametwo,'input#chLname1',jsonData.LastNametwo)
         cy.Passengerdetailselection('#adltFlyerGender1-button','ul#adltFlyerGender1-menu li',jsonData.Gendertwo)
         cy.Passengerdetailselection('#dobMonth1-button','ul#dobMonth1-menu li','May')
         
         cy.Passengerdetailselection('#dobDay1-button','ul#dobDay1-menu li','15')
         cy.Passengerdetailselection('#dobYear1-button','ul#dobYear1-menu li','1996') 
         //Card details
         cy.get('button.primaryInline').click()
         
         cy.CardDetails(jsonData.Cardnumber,jsonData.Securitycode,jsonData.Passengerone.FirstNameone,jsonData.Passengerone.LastNameone,false) 
                
                
      
        
       
        
           
        
        })
        break;

        case 'Destination Weddings':

            cy.packagenavigation('div.dlv-tab-header','Destination Weddings')
            cy.Buttonselection('div#hotelDetailsList button.secondary', 'button#loadOutBoundFlightResults', 'loadOutBoundFlightResults')
            cy.Buttonselection('button.select','#loadReturnFlightResults','loadReturnFlightResults')
            cy.Buttonselection('button.select','#loadChooseYourExtra','loadChooseYourExtra')
            
    }

})  
        
    

        
    



            
            
    
            
    

        
        




Cypress.Commands.add("tripType", (calenderlocator, randomvaluefromcalender,tripType) => {
   
    switch (tripType) {
        case 'One Way':
            cy.login('#selectTripType-desc li', 'One Way')
            cy.get(calenderlocator).click({ force: true })
            cy.get(randomvaluefromcalender).then($options => {
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count) 
                cy.wrap($options.eq(randomIndex)).click({ force: true })
                cy.get('.donebutton').click({force:true})
                
                
            })

        
            break;
            case 'Round Trip':
                cy.login('#selectTripType-desc li', 'Round Trip')
                for(var i=0 ;i<2;i++)
                {
                cy.get(calenderlocator).click({ force: true })
                cy.get(randomvaluefromcalender).then($options => {
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count)
                cy.wrap($options.eq(randomIndex)).click({ force: true })
                cy.get('.donebutton').click({force:true})
                })
                
            }
            break;

        }
    })





            
        //             case 'Round Trip':
        //                 //cy.login('#selectTripType-desc li', 'Round Trip')
        //                 for(var i=0 ;i<2;i++)
        //                 {
                        
        //                 cy.get(calenderlocator).click({ force: true })
        //                 cy.get(randomvaluefromcalender).then($options => {
        //                 const count = $options.length
        //                 const randomIndex = Math.floor(Math.random() * count)
        //                 cy.wrap($options.eq(randomIndex)).click({ force: true })
        //                 //cy.get('.donebutton').click()
        //                 //cy.wait(3000)
        //                 })
                        
        //             }
        //             break;  
        //         }
          


        
         
          









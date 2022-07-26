class signIn
{

    getSignIn()
    {
        return cy.contains('Sign Up')
    }

    getFirstName()
    {
        return  cy.get('div.firstName input')
    }

    getLastName()
    {
        return cy.get('div.lastName input')
    }

    getSelectMonth()
    {
      
    return cy.get('#idp-month__selected')
    }

    getSelectedDate()
    {
        return cy.get('#idp-date__selected')
    }

    getSelceteYear()
    {
        return cy.get('#idp-year__selected')
    }

    getSelectGender()
    {
        return cy.get('#idp-gender__selected')
    }

    getSelectNextButton()
    {
        return cy.get('button[id="basic-info-next"]')
    }
    getSelectCountry()
    {
        return cy.get('#addresscountry-desc')
    }
    getAddress()
        {
            return cy.get('input[aria-label="Address Line 1"]')
        }
    getCity()
    {
        return cy.get('input[aria-label="City"]')
    }

}

export default signIn;
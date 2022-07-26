class deltaHome
{

    getFromButton()
    {
        return  cy.get('#fromAirportName > .airport-code')
    }

    getToButton()
    {
        return cy.get('#toAirportName > .airport-code')
    }

    getDynamicDropdownForToAndFrom()
    {
        return cy.get('#search_input')
    }
     
    getListOfAirport()
    {
        return cy.get('.airport-list')
    }

    getSelectedDropdownvalue()
    {
        return cy.get('.airport-list a span')
    }
}

export default deltaHome;

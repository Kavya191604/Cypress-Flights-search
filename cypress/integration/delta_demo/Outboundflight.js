describe('example to-do app', () => {

    before(function () {
        cy.visit('https://www.delta.com/flight-search/search-results?cacheKeySuffix=80e3f0ba-8397-45e1-b921-0f2090d8659b')
        
        Cypress.Cookies.defaults({
            preserve: /.*/
        })
    })
    beforeEach(() => {
        cy.restoreLocalStorageCache()
        cy.restoreSessionStorageCache()
    });
    afterEach(() => {
        cy.saveLocalStorageCache()
        cy.saveSessionStorageCache()
    });

    it('validate cabin header names', () => {
        cy.get('.advancedSearchPageView').should('be.visible');
        cy.get('.advanced-search-heading').should('have.text', " Book a flight ");

})

})
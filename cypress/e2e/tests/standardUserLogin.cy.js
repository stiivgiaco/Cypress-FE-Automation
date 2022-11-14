import homeSaucePage from '../../page-objects/homepageSauce'
import inventoryPage from '../../page-objects/inventoryPage'

/// <reference types="cypress" />
describe('Standard User Test', () => {
    beforeEach(function(){
        
        cy.fixture('/testdata')
        .then(testdata => {
            this.testdata = testdata;
        cy.visit('/');
        })
    });
    it('should login using standard user and redirect to Products page', function(){
        homeSaucePage.typeUsrname(this.testdata.standardUser);
        homeSaucePage.typePswrd(this.testdata.password);
        homeSaucePage.clickLogin();
        inventoryPage.elements.titleInventory().should('have.text', 'Products');
    });
});
import homeSaucePage from '../../page-objects/homepageSauce'
import inventoryPage from '../../page-objects/inventoryPage'

/// <reference types="cypress" />
describe('Locked User Test', () => {
    beforeEach(function(){
        
        cy.fixture('/testdata')
        .then(testdata => {
            this.testdata = testdata;
        cy.visit('/');
        })
    });
    it('should try to log in using locked user and show error message', function(){
        homeSaucePage.typeUsrname(this.testdata.lockedUser);
        homeSaucePage.typePswrd(this.testdata.password);
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMsg().should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    
    });
});
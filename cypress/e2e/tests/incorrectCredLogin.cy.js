import homeSaucePage from '../../page-objects/homepageSauce'
import inventoryPage from '../../page-objects/inventoryPage'

/// <reference types="cypress" />
describe('Incorrect Credentials test', () => {
    beforeEach(function(){
        
        cy.fixture('/testdata')
        .then(testdata => {
            this.testdata = testdata;
        cy.visit('/');
        })
    });
    
    it('should try to log in using incorrect username and show error message', function(){
        homeSaucePage.typeUsrname(this.testdata.incorrectUser);
        homeSaucePage.typePswrd(this.testdata.password);
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMsg().should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service');
    
    });

    it('should try to log in using incorrect password and show error message', function(){
        homeSaucePage.typeUsrname(this.testdata.standardUser);
        homeSaucePage.typePswrd(this.testdata.incorrectPassword);
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMsg().should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service');
});

})
import homeSaucePage from '../../page-objects/homepageSauce'
import inventoryPage from '../../page-objects/inventoryPage'
import common from '../../page-objects/common'

/// <reference types="cypress" />
describe('Remove Item Test', () => {
    beforeEach(function(){
        
        cy.fixture('/testdata')
        .then(testdata => {
            this.testdata = testdata;
        cy.visit('/');
        })
    });
    it('should login using standard user and Add Items to Cart and remove an item', function(){
        homeSaucePage.typeUsrname(this.testdata.standardUser);
        homeSaucePage.typePswrd(this.testdata.password);
        homeSaucePage.clickLogin();
        inventoryPage.elements.titleInventory().should('have.text', 'Products');
        inventoryPage.clickAddBag();
        common.elements.cartBadge().should('have.text', '1');
        inventoryPage.clickAddOnsie();
        common.elements.cartBadge().should('have.text', '2');
        inventoryPage.clickRemoveOnsie();
        common.elements.cartBadge().should('have.text', '1');
    });
});
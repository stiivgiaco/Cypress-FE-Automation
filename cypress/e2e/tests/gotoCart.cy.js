import homeSaucePage from '../../page-objects/homepageSauce'
import inventoryPage from '../../page-objects/inventoryPage'
import cartPage from '../../page-objects/cartPage'
import common from '../../page-objects/common'

/// <reference types="cypress" />
describe('Go to Cart Test', () => {
    beforeEach(function(){
        
        cy.fixture('/testdata')
        .then(testdata => {
            this.testdata = testdata;
        cy.visit('/');
        })
    });
    it('should add an item and proceed to cart', function(){
        homeSaucePage.typeUsrname(this.testdata.standardUser);
        homeSaucePage.typePswrd(this.testdata.password);
        homeSaucePage.clickLogin();
        inventoryPage.elements.titleInventory().should('have.text', 'Products');
        inventoryPage.clickAddBag();
        inventoryPage.clickAddOnsie();
        inventoryPage.clickcartLink();
        cartPage.elements.titleCart().should('have.text', 'Your Cart');
        common.elements.cartBadge().should('have.text', '2');
    });
});
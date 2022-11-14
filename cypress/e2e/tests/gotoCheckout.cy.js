import homeSaucePage from '../../page-objects/homepageSauce'
import inventoryPage from '../../page-objects/inventoryPage'
import cartPage from '../../page-objects/cartPage'
import checkoutPage from '../../page-objects/checkoutPage'

/// <reference types="cypress" />
describe('Check out Test', () => {
    beforeEach(function(){
        
        cy.fixture('/testdata')
        .then(testdata => {
            this.testdata = testdata;
        cy.visit('/');
        })
    });
    it('should add and item, proceed to cart and move to checkout section', function(){
        homeSaucePage.typeUsrname(this.testdata.standardUser);
        homeSaucePage.typePswrd(this.testdata.password);
        homeSaucePage.clickLogin();
        inventoryPage.elements.titleInventory().should('have.text', 'Products');
        inventoryPage.clickAddBag();
        inventoryPage.clickAddOnsie();
        inventoryPage.clickcartLink();
        cartPage.elements.titleCart().should('have.text', 'Your Cart');
        cartPage.clickcheckoutBtn();
        checkoutPage.elements.titleCheckout().should('have.text', 'Checkout: Your Information');
        checkoutPage.typename(this.testdata.firstName);
        checkoutPage.typelastName(this.testdata.lastName);
        checkoutPage.typezip(this.testdata.postCode);
    });
});
import homeSaucePage from '../../page-objects/homepageSauce'
import inventoryPage from '../../page-objects/inventoryPage'
import cartPage from '../../page-objects/cartPage'
import checkoutPage from '../../page-objects/checkoutPage'
import checkoutOverviewPage from '../../page-objects/checkoutOverviewPage'
import completePage from '../../page-objects/completePage'

/// <reference types="cypress" />
describe('Complete Order Test', () => {
    beforeEach(function(){
        
        cy.fixture('/testdata')
        .then(testdata => {
            this.testdata = testdata;
        cy.visit('/');
        })
    });
    it('add items in cart and proceed to complete order', function(){
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
        checkoutPage.clickcontinueChkOutBtn();
        checkoutOverviewPage.elements.titleoverwiew().should('have.text', 'Checkout: Overview');
        checkoutOverviewPage.clickfinishtBtn();
        completePage.elements.titleComplete().should('have.text', 'Checkout: Complete!');
        completePage.elements.completeHeader().should('have.text', 'THANK YOU FOR YOUR ORDER');
        completePage.elements.completeText().should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        completePage.elements.completePony().should('be.visible');

    });
});
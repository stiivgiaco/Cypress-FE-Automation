class inventoryPage{

    elements = {
        titleInventory: () => cy.get('.title'),
        addBagBtn: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        addOnesieBtn: () => cy.get('#add-to-cart-sauce-labs-onesie'),
        removeOnesieBtn: () => cy.get('#remove-sauce-labs-onesie'),
        cartLink: () => cy.get('.shopping_cart_link')
    }
    clickAddBag(addBag){
        this.elements.addBagBtn().click();
    }
    clickAddOnsie(addOnesie){
        this.elements.addOnesieBtn().click();
    }
    clickRemoveOnsie(removeOnesie){
        this.elements.removeOnesieBtn().click();
    }
    clickcartLink(cartLink){
        this.elements.cartLink().click();
    }
}

export default new inventoryPage();
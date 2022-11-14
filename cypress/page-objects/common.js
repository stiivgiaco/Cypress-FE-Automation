class common{

    elements ={
        cancelBtn: () => cy.get('#cancel'),
        cartBadge: () => cy.get('.shopping_cart_badge')
    }


    clickCancel(cancel){
        this.elements.cancelBtn().click();
    }
}

export default new common();
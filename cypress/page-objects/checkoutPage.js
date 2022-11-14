class checkoutPage{

    elements = {
        titleCheckout: () => cy.get('.title'),
        cancelChkOutBtn: () => cy.get('#cancel'),
        continueChkOutBtn: () => cy.get('#continue'),
        nameInput: () => cy.get('#first-name'),
        lastnameInput: () => cy.get('#last-name'),
        zipInput: () => cy.get('#postal-code')
    }
    clickcancelChkOutBtn(cancel){
        this.elements.cancelChkOutBtn().click();
    }

    clickcontinueChkOutBtn(continueChkOut){
        this.elements.continueChkOutBtn().click();

    }
    typename(name){
        this.elements.nameInput().type(name);

    }
    typelastName(lastname){
        this.elements.lastnameInput().type(lastname);

    }
    typezip(zip){
        this.elements.zipInput().type(zip);

    }
}

export default new checkoutPage();
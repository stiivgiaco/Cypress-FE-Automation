class completePage{

    elements = {
        titleComplete: () => cy.get('.title'),
        completeHeader: () => cy.get('.complete-header'),
        completeText: () => cy.get('.complete-text'),
        completePony: () => cy.get('.pony_express'),
        backHomeBtn: () => cy.get('#back-to-products'),
    }
    clickbackHomelBtn(backHome){
        this.elements.backHomeBtn().click();

    }
}

export default new completePage();
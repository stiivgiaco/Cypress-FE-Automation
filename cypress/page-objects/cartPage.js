class cartPage{

    elements = {
        titleCart: () => cy.get('.title'),
        removeBag: () => cy.get('#remove-sauce-labs-backpack'),
        removeOnsie: () => cy.get('#remove-sauce-labs-onesie'),
        continueCrtBtn: () => cy.get('#continue-shopping'),
        checkoutBtn: () => cy.get('#checkout'),
    }
    clickremoveBag(removeBag){
        this.elements.removeBag().click();
    }
    clickremoveOnsie(removeOnsie){
        this.elements.removeOnsie().click();
    }
    clickcontinueCrtBtn(continueCrt){
        this.elements.continueCrtBtn().click();
    }
    clickcheckoutBtn(checkout){
        this.elements.checkoutBtn().click();
    }
}

export default new cartPage();
class checkoutOverviewPage{

    elements = {
        titleoverwiew: () => cy.get('.title'),
        cancelOverwiewBtn: () => cy.get('#cancel'),
        finishtBtn: () => cy.get('#finish'),
    }
    clickcancelOverwiewBtn(cancel){
        this.elements.cancelOverwiewBtn().click();
    }

    clickfinishtBtn(finish){
        this.elements.finishtBtn().click();

    }
}

export default new checkoutOverviewPage();
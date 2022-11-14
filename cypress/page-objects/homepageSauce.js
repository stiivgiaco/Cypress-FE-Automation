class homeSaucePage{

    elements ={
        usrnameInput: () => cy.get('#user-name'),
        pswrdInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMsg: () => cy.get('h3[data-test="error"]')
    }

    typeUsrname(username){
        this.elements.usrnameInput().type(username);

    }
    
    typePswrd(password){
        this.elements.pswrdInput().type(password);
    }

    clickLogin(login){
        this.elements.loginBtn().click();
    }
}

export default new homeSaucePage();
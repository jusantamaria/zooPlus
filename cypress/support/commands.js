
Cypress.Commands.add('newAccount', ()=>{

    cy.fixture("DOM/user").then((the)=>{
        // Click on My ZooPlus
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        // Click on Crear cuenta
        cy.contains('#tab-navigation li', 'Crear cuenta').click()
        cy.url('contains','registration')
        // Type valid credentials in 'Create account' form
        cy.get(the.firstNameInput).type(the.username.data.valid)
        cy.get(the.lastName.input).type(the.lastName.data.valid)
        cy.get(the.email.input).type(the.email.data.valid)
        cy.get(the.password.input).type(the.password.data.valid)
        cy.get(the.button).click()
    })
})

Cypress.Commands.add('login', ()=>{
    cy.fixture("DOM/user").then((the)=>{
        // Click on My ZooPlus
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        // Type valid credentials in login form
        cy.get(the.username.input).type(the.email.data.valid)
        cy.get(the.password.input).type(the.password.data.valid)
        cy.get(the.button).click()
    })
})
Cypress.Commands.add('wrongEmailLogin', ()=>{
    cy.fixture("DOM/user").then((the)=>{
        // Click on My ZooPlus
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        cy.get(the.username.input).type(the.email.data.invalid)
        cy.get(the.password.input).type(the.password.data.valid)
        cy.get(the.button).click()
    })
})
Cypress.Commands.add('emptyPasswordInput', ()=>{
    cy.fixture("DOM/user").then((the)=>{
        // Click on My ZooPlus
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        cy.get(the.username.input).type(the.email.data.invalid)
        cy.get(the.button).click()
    })
})

Cypress.Commands.add('APIassertionOK', () =>{
    cy.request({
        method: 'GET',
        url: 'https://www.zooplus.es/account/overview'
    }).then()
})

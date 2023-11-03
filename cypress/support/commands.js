
Cypress.Commands.add('newAccount', ()=>{

    cy.fixture("DOM/newUser").then((the)=>{
        // Type valid credentials in 'Create account' form
        cy.get(the.username.input).type(the.data.valid)
        cy.get(the.lastName.input).type(the.data.valid)
        cy.get(the.email.input).type(the.data.valid)
        cy.get(the.password.input).type(the.data.valid)
    })
})

Cypress.Commands.add('login', ()=>{
    cy.get('#username').type('example-email2@gmail.com')
    cy.get('#password').type('MyPassword99')
})
Cypress.Commands.add('wrongEmailLogin', ()=>{
    cy.get('#username').type('example-email2gmail.com')
    cy.get('#password').type('MyPassword99')
})
Cypress.Commands.add('emptyPasswordInput', ()=>{
    cy.get('#username').type('example-email2@gmail.com')

})
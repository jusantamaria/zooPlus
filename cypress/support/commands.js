
Cypress.Commands.add('newAccount', ()=>{
    cy.get('#firstName').type('Julian')
    cy.get('#lastName').type('Santamarta')
    cy.get('#email').type('example-email3@gmail.com')
    cy.get('#password').type('MyPassword99')
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
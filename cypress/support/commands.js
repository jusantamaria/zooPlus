
Cypress.Commands.add('createNewAccount', ()=>{
    cy.get('#firstName').type('Julian')
    cy.get('#lastName').type('Santamaria')
    cy.get('#email').type('jbattaglini97@gmail.com')
    cy.get('#password').type('MyPassword99')
})
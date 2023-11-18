const acceptCookies = () =>{cy.get('#onetrust-accept-btn-handler').click()}

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

Cypress.Commands.add('APILoginTest', () =>{
    cy.session('LoginZooPlus',()=>{
        cy.visit('https://login.zooplus.es/')
        acceptCookies();
        cy.request({
            method: 'POST',
            url: "/auth",
            form: true,
            body:{
                    username: 'myexampleemail10@gmail.com',
                    password:'MyPassword99',
                }
        })
    })
})

Cypress.Commands.add('addItemToCart', () => {
    cy.visit('/shop/tienda_perros/pienso_perros')
    cy.get('[data-zta="quantityStepperIncrementButton"]').first().click()
    cy.get('[data-zta="quantityStepperInput"]').first().should('have.value','1')
    cy.get('[data-zta="add-to-cart"]').first().click()
})

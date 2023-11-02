import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();

const acceptCookies = () =>{cy.get('#onetrust-accept-btn-handler').click()}
const loginAssertion = () =>{cy.get('.title_banner__content').should('contain.text','mi zooplus')
cy.url('contains','/account/overview')}


describe('Validate account form', () => {
    beforeEach('Visit de website under test',()=>{
        cy.visit('/')
        acceptCookies();
        cy.get('.TopBar-module_topBar__bavkr').should('be.visible')
    })
    it('HappyPath: Validate create a new account correctly', () => {
        // Click on My ZooPlus
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        // Click on Crear cuenta
        cy.contains('#tab-navigation li', 'Crear cuenta').click()
        cy.url('contains','registration')
        // Filling out the new user form
        cy.newAccount();
        cy.get('#login-btn').click()
        // Assertion: The user already created the account and is logged in
        loginAssertion();
    });
    it('Validate user cant create account with an existing email', () => {
        // Click on My ZooPlus
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        // Click on Crear cuenta
        cy.contains('#tab-navigation li', 'Crear cuenta').click()
        cy.url('contains','registration')
        // Filling out the new user form
        cy.newAccount();
        // Click on login button
        cy.get('#login-btn').click()
        // Assertion: The email already exists
        cy.get('.form-message-text').should('have.text','El email ya existe')
    });
    it('Validate Login form', () => {
        // Click on My ZooPlus
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        // Filling out login form
        cy.login()
        // Click on login button
        cy.get('#login-btn').click()
        // Assertion: User is logged in
        loginAssertion();
    });
    it('Validate email input with no @', () => {
        cy.visit('/')
        // Click on My ZooPlus
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        // Filling out login form
        cy.wrongEmailLogin()
        // Click on login button
        cy.get('#login-btn').click()
        // Assertion: error message is displayed below email input
        cy.get('#usernameErrorMessage').should('contain.text','La dirección de correo electrónico no es válida')
        // Assertion: email input has a red border color when the email is not correct
        cy.get('.form-controls input.error').should('have.css','border','1.6px solid rgb(237, 28, 36)')
    });
    it.only('Validate error when password input is empty', () => {
        cy.visit('/')
        // Click on My ZooPlus
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        // Filling out login form
        cy.emptyPasswordInput()
        // Click on login button
        cy.get('#login-btn').click()
        // Assertion: error message is displayed below email input
        cy.get('#emptyPasswordErrorMessage').should('contain.text','Por favor, introduce la contraseña')
        // Assertion: password input has a red border color when the password input is empty
        cy.get('#password').should('have.css','border','1.6px solid rgb(237, 28, 36)')
    });
});


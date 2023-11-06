import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();

const acceptCookies = () =>{cy.get('#onetrust-accept-btn-handler').click()}
const loginAssertion = () =>{cy.get('.title_banner__content').should('contain.text','mi zooplus')
cy.url('contains','/account/overview')}


describe('Validate account form', () => {
    beforeEach('Precondition: Visit the website under test',()=>{
        cy.visit('/')
        acceptCookies();
        cy.get('.TopBar-module_topBar__bavkr').should('be.visible')
    })
    it('HappyPath: Validate create a new account correctly', () => {
        // Filling out the new user form with Cy.Commands
        cy.newAccount();
        // Assertion: The user already created the account and is logged in
        loginAssertion();
    });
    it('Validate Login form works correctly', () => {
        // Filling out login form
        cy.login()
        // Assertion: User is logged in
        loginAssertion();
    });
    it('Validate user cannot create account with an existing email', () => {
        // Filling out the new user form with Cy.Commands
        cy.newAccount();
        // Assertion: The email already exists
        cy.get('.form-message-text').should('have.text','El email ya existe')
    });
    it('Validate email input with no @', () => {
        // Filling out login form
        cy.wrongEmailLogin()
        // Assertion: error message is displayed below email input
        cy.get('#usernameErrorMessage').should('contain.text','La dirección de correo electrónico no es válida')
        // Assertion: email input has a red border color when the email is not correct
        cy.get('.form-controls input.error').should('have.css','border','1.6px solid rgb(237, 28, 36)')
    });
    it('Validate error when password input is empty', () => {
        // Filling out login form
        cy.emptyPasswordInput()
        // Assertion: error message is displayed below email input
        cy.get('#emptyPasswordErrorMessage').should('contain.text','Por favor, introduce la contraseña')
        // Assertion: password input has a red border color when the password input is empty
        cy.get('#password').should('have.css','border','0.8px solid rgb(118, 118, 118)')
    });
});


import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();

const acceptCookies = () =>{cy.get('#onetrust-accept-btn-handler').click()}


describe('HAPPY PATH: This feature is created to analize tests performance', () => {
    beforeEach('Visit de website under test',()=>{
        cy.visit('/')
        acceptCookies();
        cy.get('.TopBar-module_topBar__bavkr').should('be.visible')
    })
    it('Create an account', () => {
        cy.get('#shopHeaderAccountLink').click()
        cy.url().should('contain','/auth')
        cy.contains('#tab-navigation li', 'Crear cuenta').click()
        cy.createNewAccount();
    });
});
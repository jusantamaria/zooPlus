import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();

const acceptCookies = () =>{cy.get('#onetrust-accept-btn-handler').click()}

describe('Validate account form', () => {
    beforeEach('Precondition: Visit the website under test and login',()=>{
        cy.session('Login',() =>{
            cy.visit('/')
            acceptCookies();
            cy.get('.TopBar-module_topBar__bavkr').should('be.visible')
            cy.login();
            cy.url().should('contain','account/overview')
        })
        
    })
    it('Validate that user can access to coupons section from the corner menu', () => {
        cy.visit('https://www.zooplus.es/account/overview')
        cy.get('#shopHeaderAccountLink').invoke("show")
        cy.get('#shopHeaderAccountFlyout').invoke("show")
        cy.get("#shopHeaderAccountFlyout > :contains('Cupones')").click({force:true})
        couponsPageAssertion();
    });
})
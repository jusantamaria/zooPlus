import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();

const acceptCookies = () =>{cy.get('#onetrust-accept-btn-handler').click()}
const couponsPageAssertion = () => {
cy.get('.coupons-title').should('include.text','Mis cupones')
cy.get('#availableCouponsTab').should('be.visible')
cy.get('#redeemedCouponsTab').should('be.visible')
}

describe('Validate coupons implementation', () => {
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
    it('Validate that user can access to coupons section from the left-side menu', () => {
        cy.visit('https://www.zooplus.es/account/overview')
        cy.get('#acc-nav-menu-header').click()
        cy.get('[data-zta="account-navigation-coupons-link"]' ).click()
        couponsPageAssertion();
    });
    it('Validate that user can access to coupons section from horizontal panel', () => {
        cy.visit('https://www.zooplus.es/account/overview')
        cy.viewport(550,750)
        cy.get('#acc-nav-menu-header').click()
        cy.get('[data-zta="account-navigation-coupons-link"]').click()
        couponsPageAssertion();
    });
    
})

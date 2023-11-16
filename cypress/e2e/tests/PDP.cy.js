import '@testing-library/cypress/add-commands'
import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();


const acceptCookies = () =>{cy.get('#onetrust-accept-btn-handler').click()}

describe('Validate adding products to shopping carts correctly', () => {
    beforeEach('Precondition: Visit the website under test and login',()=>{
        cy.session('zooPlusLogin', ()=>{
            cy.visit('/')
        acceptCookies();
        cy.login()
        cy.url().should('contain','/account/overview')

        })        
    })
    it('Verify user can navigate to Dogs section', () => {
        cy.visit('/account/overview')
        cy.url().should('contain','/account/overview')
        cy.get('.title_banner__content').should('contain.text','bienvenido/a a tu área personal.')
        cy.get('[data-zta="lower-bar-category-item-link"]').first().trigger('mouseover')
        cy.contains('Tienda para perros: accesorios y comida ').click()
        cy.url().should('contain','/shop/tienda_perros')
    })
    it('Verify pop up is displayed after user adds a product to shopping cart', () => {
        cy.visit('/shop/tienda_perros/pienso_perros')
        cy.get('[data-zta="quantityStepperIncrementButton"]').first().click()
        cy.get('[data-zta="quantityStepperInput"]').first().should('have.value','1')
        cy.get('[data-zta="add-to-cart"]').first().click()
        cy.get('[data-testid="popoverWrapper"]').as('popUp').should('be.visible')
        cy.get('[data-zta="cart-feedback-icon"]').should('be.visible')
    });
});
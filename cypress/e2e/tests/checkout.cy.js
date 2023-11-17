import '@testing-library/cypress/add-commands'
import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();
const acceptCookies = () =>{cy.get('#onetrust-accept-btn-handler').click()}

describe('Validate shopping cart', () => {
    beforeEach('Precondition: Add a product to the shopping cart',()=>{
        cy.visit('/shop/tienda_perros/pienso_perros')
        acceptCookies();
        cy.get('[data-zta="page-title"]').should('contain','Pienso para perros')
        cy.get('[data-zta="quantityStepperIncrementButton"]').first().click()
        cy.get('[data-zta="quantityStepperInput"]').first().should('have.value','1')
        cy.get('[data-zta="add-to-cart"]').first().click()
        cy.get('[data-testid="MiniCartItemsCount"]').should('contain','1')
        })        
    it('Validate user deletes the product correctly', () => {
        cy.visit('/checkout/cart')
        cy.get('[data-zta="H1UIC"]').should('contain','Mi cesta')
        cy.get('[data-zta="quantityStepperDecrementButton"]').click()
        cy.get('[data-zta="removedArticleMsg"]').should('contain.text','El artículo se ha eliminado correctamente.')
        cy.get('[data-zta="H1UIC"]').should('contain','Tu cesta está vacía')
    })
    it('Validate user can undo when deletes a product', () => {
        cy.visit('/checkout/cart')
        cy.get('[data-zta="H1UIC"]').should('contain','Mi cesta')
        cy.get('[data-zta="quantityStepperDecrementButton"]').click()
        cy.get('[data-zta="removedArticleMsg"]').should('contain.text','El artículo se ha eliminado correctamente.')
        cy.get('[data-zta="H1UIC"]').should('contain','Tu cesta está vacía')
        cy.contains('Deshacer').click()
        cy.get('[data-zta="H1UIC"]').should('contain','Mi cesta')
    })
    it('Validate user cannot proceed to checkout when the price is under 15 euros', () => {
        cy.visit('/checkout/cart')
        cy.get('[data-zta="overviewSubTotalValue"]').invoke('text').then(($price) =>{
            const price = parseInt($price);
            const checkoutBtn = cy.get('[data-zta="gotoPreviewBottom"]');

            if (price < 15) {
                checkoutBtn.should('be.disabled');
                cy.get('[data-zta="alertText"]').should('contain.text','Recuerda: el importe mínimo de pedido es de 15,00 € (más gastos de envío)')
            }
            else {
                checkoutBtn.should('be.enabled');
            }
        })  
    })
})

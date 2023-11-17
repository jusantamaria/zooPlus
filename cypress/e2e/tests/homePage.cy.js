import '@testing-library/cypress/add-commands'
import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();
import 'cypress-map';


const acceptCookies = () =>{cy.get('#onetrust-accept-btn-handler').click()}

describe('Multiple validations on the Home Page', () => {
    beforeEach('Precondition: Visit the website under test home page',()=>{
        cy.visit('/')
        acceptCookies();
        })        
    it('Validate that every A data attribute has the HREF attribute', () => {
        cy.get('ul *')
        .filter((el)=>{
            const names = el.getAttributeNames()
            return names.some((name) => name.startsWith('data-'))
        })
        .each(($el, k) => {
            expect($el, `el $(k + 1)`).to.have.attr('href')
        })
    })
    it('Validate every nav bar element has an href link', () => {
        cy.get('.LowerBar-module_categoryBar__evM0O').within(()=>{
            cy.get('li').should('have.length',9)
        })
        cy.get('.LowerBar-module_categoryBar__evM0O').within(()=>{
            cy.get('a').should('have.attr','href')
        })
    });
})
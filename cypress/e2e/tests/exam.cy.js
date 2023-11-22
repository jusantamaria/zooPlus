import {allure} from 'cypress/support/constants/allure.js'
import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();
import {opData} from  'cypress/support/utils/utils.ts';

describe('example', () => {
    it('ejemplo', () => {
        cy.allure()
        .tms('', allure.TMS)
        .testName('Nombre del test')
        .feature('POC-ls')
        .tag('tag de test')
        .description('Esta es una descripcion del test')
        .parentSuite('operation Mandager')
        .tag('E2E','OPM')

        const opData = generateData ();

        cy.createOperator(opData);
    });
});
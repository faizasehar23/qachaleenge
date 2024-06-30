import Selectors from '../selectors/base'

export default class Base {

    static getSelectors() {
        return Selectors
    }

    static visitBaseURL(BASEURL) {
        cy.visit(BASEURL)
    }

    static clickHamburgerIcon() {
        cy.get(this.getSelectors().coreworkspaceElement).shadow()
        .find(this.getSelectors().hamburgerIcon).click()
    }

    static selectModule(module) {
        cy.get(this.getSelectors().coreworkspaceElement).shadow()
        .find(this.getSelectors().coredrawerElement).shadow()
        .find(this.getSelectors().corelistElement).shadow()
        .find(this.getSelectors().mwclistElement)
        .find(this.getSelectors().corelistitemElement).shadow()
        .contains(module)
        .trigger('mouseover')
        .click()
    }

    static selectChildModule(childModule) {
        cy.get(this.getSelectors().coreworkspaceElement).shadow()
        .find(this.getSelectors().coredrawerElement).shadow()
        .find(this.getSelectors().corelistElement).shadow()
        .find(this.getSelectors().corelistElement).shadow()
        .find(this.getSelectors().corelistitemElement).shadow()
        .contains(childModule)
        .trigger('mouseover')
        .click()
    }

    static shortTimeWait() {
        cy.wait(1000)
    }

    static miniWait() {
        cy.wait(500)
    }

    static waitForHomePage() {
        cy.intercept('/system/api/userPreferences').as('home')
        cy.wait('@home', {timeout : 30000})
    }

    static selectFirstOption(option) {
        cy.get(this.getSelectors().selectList).shadow()
        .find(this.getSelectors().mwclistElement)
        .find(this.getSelectors().corelistitemElement).eq(option).click()

    }

    static selectOrganisationLevel(option) {
        cy.log(option)
        cy.get(this.getSelectors().selectList).shadow()
        .find(this.getSelectors().mwclistElement)
        .find(this.getSelectors().corelistitemElement).shadow()
        .contains(option)
        .click()

    }

    static selectListAndOption(list,option) {
        cy.get(this.getSelectors().coreselectElement).eq(list).shadow()
        .find(this.getSelectors().corelistElement).shadow()
        .find(this.getSelectors().corelistitemElement).eq(option).click()

    } 

    static waitForResponse() {
        cy.wait('@waitForResponse')
    }

    static waitForResponseAndCheckStatusCode(statusCode) {
        cy.wait('@waitForResponse').its('response.statusCode').should('eq', statusCode)
    }

    static interceptAPI(method,request) {
        cy.intercept(method,request).as('waitForResponse')
    }

    static clickSaveButton() {
        cy.get(this.getSelectors().btnSave).click()
    }

    static verifyToastMessage(text) {
        cy.get(this.getSelectors().toastMessage)
        .shadow()
        .contains(text)
        .should('be.visible')
    }

    static verifyFieldValidationMessage(text) {
        cy.get(this.getSelectors().fieldValidationMessage)
        .contains(text)
        .should('be.visible')
    }

    static verifyIfElementIsNotVisible(element) {
        cy.get(element)
        .should('not.be.visible')
    }

    static verifyIfElementIsVisible(element) {
        cy.get(element)
        .should('be.visible')
    }

}
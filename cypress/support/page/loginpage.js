class LoginPage {

    navigate() {
        cy.visit('https://qalab.invertebrado.co')
    }

    fillUsername(username) {
        cy.get('#mat-input-0').type(username)
    }

    fillPassword(password) {
        cy.get('#mat-form-field-label-3 > .ark-mat-label').type(password)
    }

    submit() {
        cy.get('span.ark-btn-loader > :nth-child(1)').click();
    }

}
export const loginPage = new LoginPage();
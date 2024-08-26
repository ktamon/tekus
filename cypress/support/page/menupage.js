class MenuPage {

    navigateToMultimedia() {
        cy.get('nav').contains('Multimedia').click();
    }

    get size() {
        return cy.get('div:nth-child(1) > div > div > div > div > div > div.row.ark-header-card > div.col.d-flex.align-items-center.justify-content-start > span.ark-date-highlight.ng-star-inserted > span');
    }

    get id() {
        return cy.get('div:nth-child(1) > div > div > div > div > div > div.row.ark-header-card > div.col.d-flex.align-items-center.justify-content-start > span.ark-card-content-id.ng-star-inserted');
    }

    get preview() {
        return cy.get('div:nth-child(1) > div > div > div > div > div > div.ark-card-media-info-content > div.ark-image-container > img');
    }

    get description(){
        return cy.get('div:nth-child(1) > div > div > div > div > div > div.row.ark-card-title-content > div > a.mat-tooltip-trigger.ark-card-title');
    }

}
export const menuPage = new MenuPage();

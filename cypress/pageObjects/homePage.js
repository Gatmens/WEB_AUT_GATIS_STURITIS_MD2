import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    static get url() {
        return "";
    }

    static get makeAppointmentButton() {
        return cy.get("#btn-make-appointment");
    }

    static get menuToggleButton() {
        return cy.get("#menu-toggle .fa")
    }

    static get sidebarListButton() {
        return cy.get('[class="sidebar-nav"] a');
    }
}
import { BasePage } from './basePage';

export class AppointmentPage extends BasePage {
    static get url() {
        return "/#appointment";
    }

    static get facility() {
        return cy.get("#facility");
    }

    static get applyForHospitalReadmission() {
        return cy.get("#readmission");
    }

    static get healthcareProgram() {
        return cy.get("#program");
    }

    static get visitDate() {
        return cy.get("#date");
    }

    static get comment() {
        return cy.get("#comment");
    }

    static get bookAppointmentButton() {
        return cy.get("#btn-book-appointment");
    }
}
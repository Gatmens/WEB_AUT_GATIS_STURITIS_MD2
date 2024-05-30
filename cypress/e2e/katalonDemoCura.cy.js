import { HomePage } from "../pageObjects/homePage";
import { BasePage } from "../pageObjects/basePage";
import { LoginPage } from "../pageObjects/loginPage";
import { AppointmentPage } from "../pageObjects/appointmentPage";
import { HistoryPage } from "../pageObjects/historyPage";

describe("katalonDemoCura", () => {
    context("Make an Appointment", () => {
        beforeEach(() => {
            BasePage.visit();
          });
          it("Make an appointment", () => {
            HomePage.makeAppointmentButton.click();

            LoginPage.loginField.type("John Doe");
            LoginPage.passwordField.type("ThisIsNotAPassword");
            LoginPage.loginButton.click();

            AppointmentPage.facility.select("Seoul CURA Healthcare Center");
            AppointmentPage.applyForHospitalReadmission.click();
            AppointmentPage.healthcare("Medicaid").click();
            AppointmentPage.visitDate("30").click();
            AppointmentPage.comment.click('topRight');
            AppointmentPage.comment.type("CURA Healthcare Service");
            AppointmentPage.bookAppointmentButton.click();

            AppointmentPage.facilityValue.contains('Seoul CURA Healthcare Center');
            AppointmentPage.readmissionValue.contains('Yes');
            AppointmentPage.programValue.contains('Medicaid');
            AppointmentPage.visitDateValue.contains('30');
            AppointmentPage.commentValue.contains('CURA Healthcare Service');
          });

          it("Appointment history empty", () => {
            HomePage.makeAppointmentButton.click();

            LoginPage.loginField.type("John Doe");
            LoginPage.passwordField.type("ThisIsNotAPassword");
            LoginPage.loginButton.click();

            HomePage.menuToggleButton.click();
            HomePage.sidebarListButton.contains('History').click();
            HistoryPage.history.should("contain.text", "No appointment");
          });
        });
      })
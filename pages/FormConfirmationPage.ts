import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";
import form from "../data/userdetails.json";

let webActions: WebActions;

export class FormConfirmationPage {

  readonly page: Page;
  readonly context: BrowserContext;
  readonly STUDENT_NAME: Locator;
  readonly STUDENT_EMAIL: Locator;
  readonly GENDER: Locator;
  readonly MOBILE_NUMBER: Locator;
  readonly DOB: Locator;
  readonly SUBJECTS: Locator;
  readonly HOBBIES: Locator;
  readonly ADDRESS: Locator;
  readonly STATE_AND_CITY: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
    this.STUDENT_NAME = this.page.locator('td:has-text("Student Name")+td')
    this.STUDENT_EMAIL = this.page.locator('td:has-text("Student Email")+td');
    this.GENDER = this.page.locator('td:has-text("Gender")+td');
    this.MOBILE_NUMBER = this.page.locator('td:has-text("Mobile")+td');
    this.DOB = this.page.locator('td:has-text("Date of Birth")+td');
    this.SUBJECTS = this.page.locator('td:has-text("Subjects")+td');
    this.HOBBIES = this.page.locator('td:has-text("Hobbies")+td');
    this.ADDRESS = this.page.locator('td:has-text("Address")+td');
    this.STATE_AND_CITY = this.page.locator('td:has-text("State and City")+td');

  }

  async verifyFormData() {
    let details = form.PracticeForm;
    expect.soft(await this.STUDENT_NAME.textContent()).toBe(details.firstname + ' ' + details.lastname);
    expect.soft(await this.STUDENT_EMAIL.textContent()).toBe(details.email);
    expect.soft(await this.GENDER.textContent()).toBe(details.gender);
    expect.soft(await this.MOBILE_NUMBER.textContent()).toBe(details.mobile.toString());
    expect.soft(await this.DOB.textContent()).toBe(details.dob);
    expect.soft(await this.SUBJECTS.textContent()).toBe(details.subjects);
    expect.soft(await this.HOBBIES.textContent()).toBe(details.Hobbies);
    expect.soft(await this.ADDRESS.textContent()).toBe(details['Current Address']);
    expect.soft(await this.STATE_AND_CITY.textContent()).toBe(details['State and City']);
    await this.page.getByRole('button', { name: 'Close' }).press('Enter');
  }





}
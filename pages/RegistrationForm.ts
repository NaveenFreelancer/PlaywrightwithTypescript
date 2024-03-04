import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";
import form from "../data/userdetails.json";

let webActions: WebActions;

export class RegistrationForm {

  readonly page: Page;
  readonly context: BrowserContext;
  readonly SUBMIT_BUTTON: Locator;
  readonly FIRSTNAME_TEXTBOX: Locator;
  readonly LASTNAME_TEXTBOX: Locator;
  readonly EMAIL_TEXTBOX: Locator;
  readonly AGE_TEXTBOX: Locator;
  readonly SALARY_TEXTBOX: Locator;
  readonly DEPARTMENT_TEXTBOX: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
    this.SUBMIT_BUTTON = this.page.locator('button#submit');
    this.FIRSTNAME_TEXTBOX = this.page.locator('input#firstName');
    this.LASTNAME_TEXTBOX = this.page.locator('input#lastName');
    this.EMAIL_TEXTBOX = this.page.locator('input#userEmail');
    this.AGE_TEXTBOX = this.page.locator('input#age');
    this.SALARY_TEXTBOX = this.page.locator('input#salary');
    this.DEPARTMENT_TEXTBOX = this.page.locator('input#department');
  }

  async SubmitRegistrationForm() {
    await this.FIRSTNAME_TEXTBOX.fill(form.Registartion.firstname);
    await this.LASTNAME_TEXTBOX.fill(form.Registartion.lastname);
    await this.EMAIL_TEXTBOX.fill(form.Registartion.email);
    await this.AGE_TEXTBOX.fill(form.Registartion.age.toString());
    await this.SALARY_TEXTBOX.fill(form.Registartion.salary.toString());
    await this.DEPARTMENT_TEXTBOX.fill(form.Registartion.department);
    await this.SUBMIT_BUTTON.click();
  }

  async EditRegistrationForm() {
    await this.FIRSTNAME_TEXTBOX.fill(form.RegistartionEdit.firstname);
    await this.LASTNAME_TEXTBOX.fill(form.RegistartionEdit.lastname);
    await this.SUBMIT_BUTTON.click();
  }
}
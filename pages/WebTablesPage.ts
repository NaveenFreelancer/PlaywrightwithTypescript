import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";
import { RegistrationForm } from './RegistrationForm';
import form from "../data/userdetails.json";

let webActions: WebActions;
let registrationForm: RegistrationForm;

export class WebTablesPage {

  readonly page: Page;
  readonly context: BrowserContext;
  readonly NEW_ROW: Locator;
  readonly EDIT_ROW: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
    registrationForm = new RegistrationForm(this.page, this.context);
    this.NEW_ROW = this.page.locator('xpath=(//div[@role="row" and not(contains(@class,"-padRow"))])[last()]');
    this.EDIT_ROW = this.page.getByText('Alden').locator("xpath=..");

  }

  async addNewRow() {
    await webActions.clickByText('Add');
    await registrationForm.SubmitRegistrationForm();
  }

  async verifyNewRow() {
    for (var key in form.Registartion) {
      await expect.soft(this.NEW_ROW.getByText(form.Registartion[key], { exact: true })).toBeVisible();
    }
  }

  async editRow() {
    await this.EDIT_ROW.locator('xpath=//span[@title="Edit"]/*').click();
    await registrationForm.EditRegistrationForm();
  }

  async verifyEditiedRow() {
    for (var key in form.RegistartionEdit) {
      await expect.soft(this.EDIT_ROW.getByText(form.RegistartionEdit[key], { exact: true })).toBeVisible();
    }
  }

}
import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";
import form from "../data/userdetails.json";

let webActions: WebActions;

export class PracticeFormsPage {

  readonly page: Page;
  readonly context: BrowserContext;
  readonly FIRSTNAME_TEXTBOX: Locator;
  readonly LASTNAME_TEXTBOX: Locator;
  readonly EMAIL_TEXTBOX: Locator;
  readonly GENDER_CHECKBOX: Locator;
  readonly MOBILE_NUMBER: Locator;
  readonly DOB_INPUT: Locator;
  readonly SUBJECT_TEXTBOX: Locator;
  readonly HOBBIES_CHECKBOX: Locator;
  readonly CURRENT_ADDRESS_TEXTBOX: Locator;
  readonly STATE_DROPDOWN: Locator;
  readonly SUBMIT_BUTTON: Locator;
  readonly CITY_DROPDOWN: Locator;
  readonly UPLOAD_PICTURE: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
    this.FIRSTNAME_TEXTBOX = this.page.locator('input#firstName');
    this.LASTNAME_TEXTBOX = this.page.locator('input#lastName');
    this.EMAIL_TEXTBOX = this.page.locator('input#userEmail');
    this.MOBILE_NUMBER = this.page.locator('input#userNumber');
    this.DOB_INPUT = this.page.locator('input#dateOfBirthInput');
    this.SUBJECT_TEXTBOX = this.page.locator('input#subjectsInput');
    this.CURRENT_ADDRESS_TEXTBOX = this.page.locator('textarea#currentAddress');
    this.STATE_DROPDOWN = this.page.locator('div#state input');
    this.SUBMIT_BUTTON = this.page.locator('button#submit');
    this.CITY_DROPDOWN = this.page.locator('div#city input');
    this.UPLOAD_PICTURE = this.page.getByText('Select picture');
  }

  async fillForm(): Promise<void> {
    let details = form.PracticeForm;

    await this.FIRSTNAME_TEXTBOX.fill(details.firstname);
    await this.LASTNAME_TEXTBOX.fill(details.lastname);
    await this.EMAIL_TEXTBOX.fill(details.email);
    //Selecting GENDER
    await webActions.selectRadioButtonByValue(details.gender);
    await this.MOBILE_NUMBER.fill(details.mobile.toString());
    await this.DOB_INPUT.fill(details.dob);
    await this.SUBJECT_TEXTBOX.click({ force: true });
    //Selecting Subject
    webActions.typeAndSelectOption(this.SUBJECT_TEXTBOX,details.subjects);
    //Selecting Hobbies
    await webActions.clickByText(details.Hobbies);
    //Uploding file
    await this.UPLOAD_PICTURE.click();
    await this.UPLOAD_PICTURE.setInputFiles('data/image.jpg');
    //await this.page.waitForTimeout(3000);
    await this.CURRENT_ADDRESS_TEXTBOX.fill(details['Current Address']);
    await this.CURRENT_ADDRESS_TEXTBOX.press('Tab');
    await this.STATE_DROPDOWN.fill(details['State and City'].split(' ')[0].trim())
    await this.STATE_DROPDOWN.press('Enter');
    await this.CITY_DROPDOWN.fill(details['State and City'].split(' ')[1].trim(),)
    await this.CITY_DROPDOWN.press('Tab');
    await this.SUBMIT_BUTTON.press('Enter');
    expect(this.page.getByText('Thanks for submitting the form')).toBeVisible();

  }





}
import { Page, BrowserContext, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";

let webActions: WebActions;

export class LeftNavigations {

  readonly page: Page;
  readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
  }

  async navigateToTooltipsPage(): Promise<void> {
    await webActions.clickByText('Tool Tips');
    await expect(this.page).toHaveURL('/tool-tips')
  }

  async navigateToProgressBarPage(): Promise<void> {
    await webActions.clickByText('Progress Bar');
    await expect(this.page).toHaveURL('/progress-bar')
  }

  async navigateToDroppablePage(): Promise<void> {
    await webActions.clickByText('Droppable');
    await expect(this.page).toHaveURL('/droppable')
  }

  async navigateToPracticeFormsPage(): Promise<void> {
    await webActions.clickByText('Practice Form');
    await expect(this.page).toHaveURL('/automation-practice-form')
  }
  async navigateToBrokenLinkImagesPage(): Promise<void> {
    await webActions.clickByText('Broken Links - Images');
    await expect(this.page).toHaveURL('/broken')
  }

  async navigateToWebTablesPage(): Promise<void> {
    await webActions.clickByText('Web Tables');
    await expect(this.page).toHaveURL('/webtables')
  }


}

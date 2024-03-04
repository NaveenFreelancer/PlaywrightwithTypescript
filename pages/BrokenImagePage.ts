import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";

let webActions: WebActions;

export class BrokenImagePage {

  readonly page: Page;
  readonly context: BrowserContext;
  readonly BROKEN_IMAGE: Locator;


  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
    this.BROKEN_IMAGE = this.page.locator('p:has-text("Broken image")+img');
  }

  async validateBrokenImage() {
    expect(await this.BROKEN_IMAGE.evaluate(e => (e as HTMLImageElement).naturalWidth)).toBe(0);
    expect(await this.BROKEN_IMAGE.evaluate(e => (e as HTMLImageElement).naturalHeight)).toBe(0);

  }

}
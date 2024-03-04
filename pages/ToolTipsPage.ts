import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";

let webActions: WebActions;

export class ToolTipsPage {

  readonly page: Page;
  readonly context: BrowserContext;
  readonly TOOLTIP_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
    this.TOOLTIP_BUTTON = page.locator('#toolTipButton');
  }

  async verifyToolTipMessage(): Promise<void> {
    await this.TOOLTIP_BUTTON.hover();
    await expect(await this.page.getByRole("tooltip").textContent()).toBe("You hovered over the Button");
  }


}
import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";

// let webActions: WebActions;

export class DroppablePage {

  readonly page: Page;
  readonly context: BrowserContext;
  readonly TOOLTIP_BUTTON: Locator;
  readonly webActions: WebActions;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.webActions = new WebActions(this.page, this.context);
    this.TOOLTIP_BUTTON = page.locator('#toolTipButton');
  }

  async verifyDragAndDrop(): Promise<void> {
    await this.page.locator('#draggable').dragTo(this.page.locator('div#droppableExample-tabpane-simple div#droppable'));
    await expect(this.page.locator('div#droppableExample-tabpane-simple div#droppable p')).toHaveText('Dropped!');
  }


}
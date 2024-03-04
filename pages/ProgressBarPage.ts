import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";

let webActions: WebActions;

export class ProgressBarPage {

    readonly page: Page;
    readonly context: BrowserContext;
    PROGRESSBAR_BUTTON: Locator;
    PROGRESSBAR: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.PROGRESSBAR_BUTTON = this.page.locator('#progressBarContainer button');
        this.PROGRESSBAR = this.page.locator('#progressBar div');
    }

    async getProgressBarPercentage(): Promise<Number> {
        return Number(await webActions.getElementAttribute(this.PROGRESSBAR, 'aria-valuenow'));
    }

    async getButtonText(): Promise<string | null> {
        return await this.PROGRESSBAR_BUTTON.textContent();
    }

    async waitForProgressToComplete() {
        await expect(this.page.getByText('Reset')).toBeVisible();
    }

    async clickOnProgressBarButton(buttonText: string) {
        await webActions.clickByText(buttonText);
    }

    async waitForProgress() {
        await this.page.waitForTimeout(8000);
    }

}
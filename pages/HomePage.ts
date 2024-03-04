import { Page, BrowserContext, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";

let webActions: WebActions;

export class HomePage {

    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
    }

    async launchURL(): Promise<void> {
        await this.page.goto("/");
        await expect(this.page).toHaveTitle('DEMOQA');
    }

    async navigateToWidgetsPage(): Promise<void> {
        await webActions.clickByText('Widgets');
        await expect(this.page).toHaveURL('/widgets')
    }

    async navigateToInteractionsPage(): Promise<void> {
        await webActions.clickByText('Interactions');
        await expect(this.page).toHaveURL('/interaction')
    }

    async navigateToFormsPage(): Promise<void> {
        await webActions.clickByText('Forms');
        await expect(this.page).toHaveURL('/forms')
    }

    async navigateToElementsPage(): Promise<void> {
        await webActions.clickByText('Elements');
        await expect(this.page).toHaveURL('/elements')
    }


}
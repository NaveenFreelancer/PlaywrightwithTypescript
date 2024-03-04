import { test as baseTest } from '@playwright/test';
import { WebActions } from './WebActions';
import { HomePage } from '../pages/HomePage'
import { LeftNavigations } from '../pages/LeftNavigations';
import { ToolTipsPage } from '../pages/ToolTipsPage';
import { ProgressBarPage } from '../pages/ProgressBarPage';
import { DroppablePage } from '../pages/DroppablePage';
import { PracticeFormsPage } from '../pages/PracticeFormsPage';
import { BrokenImagePage } from '../pages/BrokenImagePage';
import { WebTablesPage } from '../pages/WebTablesPage';
import { RegistrationForm } from '../pages/RegistrationForm';
import { FormConfirmationPage } from '../pages/FormConfirmationPage';


const test = baseTest.extend<{
    webActions: WebActions;
    homePage: HomePage;
    leftNavigations: LeftNavigations;
    toolTipsPage: ToolTipsPage;
    progressBarPage: ProgressBarPage;
    droppablePage: DroppablePage;
    practiceFormsPage: PracticeFormsPage;
    brokenImagePage: BrokenImagePage;
    webTablesPage: WebTablesPage;
    resgistrationFormsPage: RegistrationForm;
    formConfirmationPage: FormConfirmationPage;
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context));
    },
    leftNavigations: async ({ page, context }, use) => {
        await use(new LeftNavigations(page, context));
    },
    toolTipsPage: async ({ page, context }, use) => {
        await use(new ToolTipsPage(page, context));
    },
    progressBarPage: async ({ page, context }, use) => {
        await use(new ProgressBarPage(page, context));
    },
    droppablePage: async ({ page, context }, use) => {
        await use(new DroppablePage(page, context));
    },
    practiceFormsPage: async ({ page, context }, use) => {
        await use(new PracticeFormsPage(page, context));
    },
    brokenImagePage: async ({ page, context }, use) => {
        await use(new BrokenImagePage(page, context));
    },
    webTablesPage: async ({ page, context }, use) => {
        await use(new WebTablesPage(page, context));
    },
    resgistrationFormsPage: async ({ page, context }, use) => {
        await use(new RegistrationForm(page, context));
    },
    formConfirmationPage: async ({ page, context }, use) => {
        await use(new FormConfirmationPage(page, context));
    },
})


export default test;
import { expect } from '@playwright/test';
import test from '../../lib/BaseTest';

test.describe('Verify widgest', async () => {


    test.beforeEach(async ({ homePage }, testInfo) => {
        console.log(`Running ${testInfo.title}`);
        await test.step(`Launch Application`, async () => {
            await homePage.launchURL();
        });

        await test.step(`Navigate to Widgets Page`, async () => {
            await homePage.navigateToWidgetsPage();
        });
    });


    test(`Verify the tooltip`, async ({ leftNavigations, toolTipsPage }) => {

        await test.step(`Navigate to Tool-tips Page`, async () => {
            await leftNavigations.navigateToTooltipsPage();
        });

        await test.step(`Verify Tool-tips message`, async () => {
            await toolTipsPage.verifyToolTipMessage();
        });


    });


    test(`Verify the progress bar`, async ({ leftNavigations, progressBarPage }) => {

        await test.step(`Navigate to Progress Bar Page`, async () => {
            await leftNavigations.navigateToProgressBarPage();
        });

        await test.step(`Verify Progress Bar before Start`, async () => {
            expect(await progressBarPage.getButtonText()).toEqual('Start')
            expect(await progressBarPage.getProgressBarPercentage()).toEqual(0);
        });

        await test.step(`Verify Progress Bar while Inprogress`, async () => {
            await progressBarPage.clickOnProgressBarButton('Start');
            await progressBarPage.waitForProgress();
            expect(await progressBarPage.getButtonText()).toEqual('Stop')
            expect(await progressBarPage.getProgressBarPercentage()).toBeGreaterThan(0);
        });

        await test.step(`Verify Progress Bar After complete`, async () => {
            await progressBarPage.waitForProgressToComplete();
            expect(await progressBarPage.getProgressBarPercentage()).toEqual(100);
            await progressBarPage.clickOnProgressBarButton('Reset');
            expect(await progressBarPage.getButtonText()).toEqual('Start')
        });



    });

}); 
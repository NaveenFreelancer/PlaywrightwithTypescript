import test from '../../lib/BaseTest';

test(`Verify Form`, async ({ homePage, leftNavigations, practiceFormsPage, formConfirmationPage }) => {
    test.slow();
    await test.step(`Launch Application`, async () => {
        await homePage.launchURL();
    });

    await test.step(`Navigate to Forms Page`, async () => {
        await homePage.navigateToFormsPage();
    });

    await test.step(`Navigate to Practice Forms Page`, async () => {
        await leftNavigations.navigateToPracticeFormsPage();
    });

    await test.step(`Fill details in form`, async () => {
        await practiceFormsPage.fillForm();
    });

    await test.step(`Verify form details `, async () => {
        await formConfirmationPage.verifyFormData();
    });

});




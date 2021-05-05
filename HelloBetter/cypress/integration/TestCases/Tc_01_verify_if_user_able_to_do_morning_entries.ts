import { BasePage } from "../../../pages/BasePage";
import { LoginPage } from "../../../pages/LoginPage";
import { SidePanel } from "../../../pages/SidePanel";
import { HomePage } from "../../../pages/HomePage";
import { JournalPage } from "../../../pages/JournalPage";
import { DateFunction } from "../../../pages/CommonUtils/DateFunction";
import * as TestData from "../../fixtures/TestData.json";



const basePage=new BasePage()
const loginPage=new LoginPage()
const sidePanel=new SidePanel()
const homePage=new HomePage()
const journalPage=new JournalPage()
const dateFunction=new DateFunction()

describe('Verify Entries', () => {
    it('Verify if user able to do morning entries', async ()=> {
       basePage.browserIntialization(TestData.Enviorment.env);
       loginPage.putEmail(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.userName)
       loginPage.putPassword(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.password)
       loginPage.clickOnSignIn();
       sidePanel.selectJournal(TestData.Enviorment.language)
       homePage.clickOnJournalAddButton()
       journalPage.clickOnNextButton()
       journalPage.putEntriesOnWentToBedField(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.EntriesOnWentToBedField)
       journalPage.putEntriesOnFellSleepAtFiled(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.EntriesOnFellSleepAtFiled)
       journalPage.putEntriesOnWokeUpAtField(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.putEntriesOnWokeUpAtField)
       journalPage.putEntriesOnGotUpAtField(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.putEntriesOnGotUpAtField)
       journalPage.clickOnNextButton()
       journalPage.clickOnYesOrNoOptionUnderMorningAndEveningEntries(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.yesOption,TestData.Enviorment.language)
       journalPage.selectValueFromDropDownForAwakeAtNightEntry(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.ValueFromDropDownForAwakeAtNightEntry)
       journalPage.putValueUnderHowLongYouAreAwakeField(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.ValueUnderHowLongYouAreAwakeField)
       journalPage.clickOnNextButton()
       journalPage.clickOnYesOrNoOptionUnderForSleepingPills(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.yesOption,TestData.Enviorment.language)
       journalPage.putValueUnderWhichOneFiledInSleepingPills(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.putValueUnderWhichOneFiledInSleepingPills)
       journalPage.clickOnNextButton()
       journalPage.putValueUnderSpecialCirumstances(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.putValueUnderSpecialCirumstances)
       journalPage.clickOnNextButton()
       journalPage.clickOnSaveButtonForMorningAndEveningEntries()
       homePage.clickOnArrowButtonForMorningEntries()

       /*Asertions on morning entries like wise we can put all assertions here i have put only few*/ 
       homePage.assertTextOfHeadersForMorningEntries(dateFunction.getCurrentYear())
       homePage.assertTimeToWentInBedMorningEntries(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.EntriesOnWentToBedField)
       homePage.assertTimeToFellAsleepMorningEntries(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.EntriesOnFellSleepAtFiled)
       homePage.assertTimeGotUpAtMorningEntries(TestData.Tc_01_verify_if_user_able_to_do_morning_entries.putEntriesOnGotUpAtField)
       homePage.clickOnJournalEntriesDeleteButton()
        
    })


})

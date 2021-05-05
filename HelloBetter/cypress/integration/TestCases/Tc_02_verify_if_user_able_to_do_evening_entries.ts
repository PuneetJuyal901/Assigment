



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
it('Verify if user able to do evening entries', async ()=> {
    basePage.browserIntialization(TestData.Enviorment.env);
    loginPage.putEmail(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.userName)
    loginPage.putPassword(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.password)
    loginPage.clickOnSignIn();
    sidePanel.selectJournal(TestData.Enviorment.language)
    homePage.clickOnJournalAddButton()
    journalPage.clickOnToday()
    journalPage.selectMonthAndYear(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.selectMonth,TestData.Tc_02_verify_if_user_able_to_do_evening_entries.selectYear)
    journalPage.selectDate(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.selectDate) 
    journalPage.clickOnEveningEntries()
    journalPage.clickOnNextButton()
    journalPage.clickonSlider(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.mood))
    journalPage.clickOnNextButton()
    journalPage.clickonSlider(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.exhaustion))
    journalPage.clickOnNextButton()
    journalPage.clickonSlider(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.abilityToFocus))
    journalPage.clickOnNextButton()
    journalPage.clickOnYesOrNoOptionUnderMorningAndEveningEntries(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.yesOption,TestData.Enviorment.language)
    journalPage.putValuesUnderHowLongFieldUnderEveningEntries(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.putValuesUnderHowLongFieldUnderEveningEntries)
    journalPage.clickOnNextButton()
    journalPage.addCoffeeUnderEveningEntries(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addCoffeeUnderEveningEntries))
    journalPage.addTeaUnderEveningEntries(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addTeaUnderEveningEntries))
    journalPage.addMateUnderEveningEntries(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addMateUnderEveningEntries))
    journalPage.addColaUnderEveningEntries(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addColaUnderEveningEntries))
    journalPage.addOtherUnderEveningEntries(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addOtherUnderEveningEntries))
    journalPage.clickOnNextButton()
    journalPage.addBeerUnderEveningEntries(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addBeerUnderEveningEntries))
    journalPage.addWineUnderEveningEntries(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addWineUnderEveningEntries))
    journalPage.addStrongAlcoholicDrinkUnderEveningEntries(Number(TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addStrongAlcoholicDrinkUnderEveningEntries))
    journalPage.clickOnNextButton()
    journalPage.clickOnSaveButtonForMorningAndEveningEntries()
    homePage.clickOnArrowButtonForMorningAndEveningEntries()


     /*Asertions on evening can be put like wise we can put all assertions here i have put only few* just for an example */ 

     homePage.assertDrinksValueWithTheGivenOne(0,TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addCoffeeUnderEveningEntries)
     homePage.assertDrinksValueWithTheGivenOne(1,TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addTeaUnderEveningEntries)
     homePage.assertDrinksValueWithTheGivenOne(2,TestData.Tc_02_verify_if_user_able_to_do_evening_entries.addMateUnderEveningEntries)
     homePage.clickOnJournalEntriesDeleteButton()
    

    
    

  
   
})
});

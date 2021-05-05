export class JournalPage{
  
        clickOnToday(){
            
           cy.get( "div[class='react-datepicker__input-container']").click()
           return new JournalPage;
        }

         selectDate(date:string){
            cy.get( "div[class*='react-datepicker__day react-datepicker__day--0"+date+"']").click()
            return new JournalPage;
        }
        selectMonthAndYear(putMonth:string,putYear:string){
            cy.get("div[class='react-datepicker__current-month']").then((theElement) => {
                let month=theElement.text().split(" ")[0].trim();
                let year=theElement.text().split(" ")[1].trim();
                if(month!=putMonth || year!=putYear){
                cy.get("button[class='react-datepicker__navigation react-datepicker__navigation--previous']").click()
              
                }
                else{
                    return 
                }
                this.selectMonthAndYear(putMonth,putYear)
               

               
              
            })
            }

          

           

        


        clickOnMorningEntries(selectLanguage:string) {
         if(selectLanguage=="English"){
             cy.get("svg[class='components__Icon-vq0nuj-6 bSzXTh']").contains("Morning entry").click();
 
         }
         else if (selectLanguage=="German"){
             cy.get("svg[class='components__Icon-vq0nuj-6 bSzXTh']").contains("Morgen-Protokoll").click(); 
         }
         return new JournalPage;
 }

        clickOnNextButton() {
        cy.get("button[class='Button__Component-sc-1cra7sq-0 fuoaAn']").click();
        return new JournalPage;

 }

        putEntriesOnWentToBedField(value:string) {
        cy.get("input[name='wentToBedAt']").click();
        cy.get("input[name='wentToBedAt']").type(value);
        return new JournalPage;

} 

        putEntriesOnFellSleepAtFiled(value:string) {
        cy.get("input[name='fellAsleepAt']").click();
        cy.get("input[name='fellAsleepAt']").type(value);
        return new JournalPage;

}
       putEntriesOnWokeUpAtField(value:string) {
       cy.get("input[name='wokeUpAt']").click();
       cy.get("input[name='wokeUpAt']").type(value);
       return new JournalPage;

}   
      putEntriesOnGotUpAtField(value:string) {
      cy.get("input[name='gotUpAt']").click();
      cy.get("input[name='gotUpAt']").type(value);
      return new JournalPage;

}  

       clickOnYesOrNoOptionUnderMorningAndEveningEntries(value:String,language:String) {
        if(language=="English" && language=="German" && value=="No"){
            cy.get("button[class='Button__Component-sc-1cra7sq-0 fuoaAn']").click();
           
        }
        else if(value=="Yes" && language=="English"){
        cy.get("button[name='isAwake']").contains("Yes").click();
        }
        else if((value=="Yes" && language=="German")){
            cy.get("button[name='isAwake']").contains("Ja").click();
        }
        return new JournalPage;
    }  

    
       selectValueFromDropDownForAwakeAtNightEntry(value:string) {
        cy.get("select[aria-labelledby='morning_journal_how_often_awake']").select(value);
        return new JournalPage;
       }


       putValueUnderHowLongYouAreAwakeField(value:string) {
        cy.get("input[aria-labelledby='morning_journal_how_long_awake']").clear();
        cy.get("input[aria-labelledby='morning_journal_how_long_awake']").type(value);
        return new JournalPage;
       }



       clickOnYesOrNoOptionUnderForSleepingPills(value:String,language:String) {
        if(language=="English "|| language=="German" && value=="No"){
            cy.get("button[class='Button__Component-sc-1cra7sq-0 fuoaAn']").click();
           
        }
        else if(value=="Yes" && language=="English"){
        cy.get("button[name='tookSleepMedication']").contains("Yes").click();
        }
        else if((value=="Yes" && language=="German")){
            cy.get("button[name='tookSleepMedication']").contains("Ja").click();
        }
        return new JournalPage;
    }  

    putValueUnderWhichOneFiledInSleepingPills(value:string) {
        cy.get("input[aria-labelledby='morning_journal_which_sleeping_medication']").clear();
        cy.get("input[aria-labelledby='morning_journal_which_sleeping_medication']").type(value);
        return new JournalPage;
       }

       putValueUnderSpecialCirumstances(value:string) {
        cy.get("input[aria-labelledby='morning_journal_did_special_affect_sleep']").clear();
        cy.get("input[aria-labelledby='morning_journal_did_special_affect_sleep']").type(value);
        return new JournalPage;
       }

       clickOnSaveButtonForMorningAndEveningEntries() {
        cy.get("button[class='Button__Component-sc-1cra7sq-0 fuoaAn']").click();
        return new JournalPage;
       }


       clickOnEveningEntries() {
         cy.get("p[class='Text-tiza08-0 eNIDHN']").click();
        return new JournalPage;
}
       
     clickonSlider(sliderValue:number){
         if(sliderValue>=5){
            cy.get("span[class='MuiSlider-markLabel']").eq((sliderValue-5)-1).click();

         }
         else if(sliderValue<=5){
             cy.get("span[class='MuiSlider-markLabel MuiSlider-markLabelActive']").eq(sliderValue).click()

         }
         return new JournalPage
        }


        putValuesUnderHowLongFieldUnderEveningEntries(value:string) {
        cy.get("input[aria-labelledby='journal_how_awake_altogether']").clear();
        cy.get("input[aria-labelledby='journal_how_awake_altogether']").type(value);
        return new JournalPage;
        }

        addCoffeeUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(1).click();
         }
        return new JournalPage;
        }

        subtractCoffeeUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(0).click();
         }
        return new JournalPage;
        }

        subtractTeaUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(2).click();
         }
        return new JournalPage;
        }
          

        addTeaUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(3).click();
         }
        return new JournalPage;
        }

        subtractMateUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(4).click();
         }
        return new JournalPage;
        }
          

        addMateUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(5).click();
         }
        return new JournalPage;
        }

        subtractColaUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(6).click();
         }
        return new JournalPage;
        }
          

        addColaUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(7).click();
         }
        return new JournalPage;
        }

        subtractOtherUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(8).click();
         }
        return new JournalPage;
        }
          

        addOtherUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(9).click();
         }
        return new JournalPage;
        }

        subtractBeerUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(0).click();
         }
        return new JournalPage;
        }
          

        addBeerUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(1).click();
         }
        return new JournalPage;
        }

        subtractWineUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(2).click();
         }
        return new JournalPage;
        }
          

        addWineUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(3).click();
         }
        return new JournalPage;
        }

        subtractStrongAlcoholicDrinkUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(4).click();
         }
        return new JournalPage;
        }
          

        addStrongAlcoholicDrinkUnderEveningEntries(quantity:number) {
            for(var i=0;i<=quantity-1;i++){
        cy.get("button[class='Button__Component-sc-1cra7sq-0 eFNZhH ButtonRound-h014j7-0 hirUMP']").eq(5).click();
         }
        return new JournalPage;
        }
          
          
      
          
      

         }
     
     
     
   


 
     
     



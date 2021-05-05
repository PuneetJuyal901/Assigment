export class SidePanel{

 
    selectJournal(selectLanguage:string) {
        if(selectLanguage=="English"){
            cy.get("span[class='NavSidebarstyle__NavLabel-sc-1jyzmlj-1 hYbTuM']").contains("Journal").click();

        }
        else if (selectLanguage=="German"){
            cy.get("span[class='NavSidebarstyle__NavLabel-sc-1jyzmlj-1 hYbTuM']").contains("Tagebuch").click(); 

        }
       
        return new SidePanel
    }}


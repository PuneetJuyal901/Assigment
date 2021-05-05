export class BasePage{


async browserIntialization(enviorment:string){

    if(enviorment=='staging'){  
     cy.visit("https://hb:HBS2021!@patient-staging.hellobetter.de")
    
    }
 else if(enviorment=="Dev"){
     cy.visit("https://hb:HBS2021@patient-staging.hellobetter.de")
 }


}
}
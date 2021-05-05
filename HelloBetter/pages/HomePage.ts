export class HomePage{

 
    
    clickOnJournalAddButton() {
       cy.get("a[href*='/journal/new']").click();
       return new HomePage;

    }

    assertTextOfHeadersForMorningEntries(year:string){
        cy.contains(year)
    }

    clickOnArrowButtonForMorningAndEveningEntries(){
        cy.get("svg[class='components__Icon-vq0nuj-6 Chevron__RotatingIcon-sc-1osjpfk-0 llZRFJ']").eq(0).click()
    }

        assertTimeToWentInBedMorningEntries(time:string){
        cy.get("input[name='morningEntry.wentToBedAt']").should('have.value', time)
    }

    assertTimeToFellAsleepMorningEntries(time:string){
        cy.get("input[name='morningEntry.fellAsleepAt']").should('have.value', time)
    }

    assertTimeGotUpAtMorningEntries(time:string){
        cy.get("input[name='morningEntry.gotUpAt']").should('have.value', time)
    }

    clickOnJournalEntriesDeleteButton(){
        cy.contains("delete").click()
    }

    assertSliderValues(index:number,value:string){
        cy.get("span[class='MuiSlider-thumb MuiSlider-thumbColorPrimary']").eq(index).contains(value)

    }
    assertDrinksValueWithTheGivenOne(index:number,value:string){
        cy.get("p[id='some_state']").eq(index).contains(value)

    }








}
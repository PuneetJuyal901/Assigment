export class DateFunction{

    getCurrentDate():string{
        let date= new Date();
        return date.getDate().toString()
    }

    getCurrentYear():string{
        let date= new Date();
        return date.getFullYear().toString()
    }


    subtractedDate(value:number):string{
        let date= new Date();
       let  newDate= date.getDay()-value
       cy.log("value is"+newDate.toString())
       return newDate.toString()
    }


}
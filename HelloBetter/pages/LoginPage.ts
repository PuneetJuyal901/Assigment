export class LoginPage{

 
    
      putEmail(putEmail:string) {
         cy.get("#email").type(putEmail);
         return new LoginPage;

      }

      putPassword(password:string) {
        cy.get("#password").type(password);
        return new LoginPage;

     }

     clickOnSignIn() {
        cy.get("button[type='submit']").click();
        return new LoginPage;

     }
    
    }
 







//*** TODO: Import Component from @angular/core
import { Component } from '@angular/core';

/*** 
  TODO: Add an @Component decorator that has the following properties:
        
        selector: 'app-component'
        template: '<h1>App Component</h1><br />'

***/
@Component({ 
  selector: 'app-component',
  template: `
    <h1>App Component!</h1>
    <br />
    <child-component></child-component>
  `
})
//*** TODO: Create an AppComponent class (make sure that you "export" the class)
export class AppComponent  {
  
}
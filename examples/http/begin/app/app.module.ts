import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//*** TODO: Import HttpModule from @angular/http



//*** TODO: Import AppComponent, DataService and Sorter 
//***       (they're located in the app folder)



@NgModule({
 //*** TODO: Add the imported HttpModule object to the imports 
  imports:      [ BrowserModule, FormsModule ],

  declarations: [ AppComponent ],
  
  ////*** TODO: Add DataService and Sorter to the providers
  providers:    [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
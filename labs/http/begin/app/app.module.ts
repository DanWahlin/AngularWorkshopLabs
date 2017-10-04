import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//*** TODO: Import HttpClientModule from @angular/common/http



//*** TODO: Import AppComponent, DataService and Sorter 
//***       (they're located in the app folder)



@NgModule({
 //*** TODO: Add the imported HttpClientModule object to the imports 
  imports:      [ BrowserModule, FormsModule ],

  declarations: [ AppComponent ],
  
  ////*** TODO: Add DataService and Sorter to the providers
  providers:    [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
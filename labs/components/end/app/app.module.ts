import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//*** TODO: Import AppComponent and ChildComponent
import { AppComponent }  from './app.component';
import { ChildComponent } from './child.component';

/*** 
  TODO: Register the Components with the Angular Module

        1. Add the AppComponent and ChildComponent symbols 
           into the declarations property array.
        2. Add AppComponent into the boostrap property array.

***/
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ChildComponent ],
  providers:    [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
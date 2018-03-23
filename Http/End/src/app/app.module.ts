import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent }  from './app.component';
import { DataService } from './data.service';
import { Sorter } from './sorter';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent ],
  //Add DataService and Sorter to the providers
  providers:    [ DataService, Sorter ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
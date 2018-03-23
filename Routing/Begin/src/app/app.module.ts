import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent }  from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CoreModule } from './core/core.module';
//*** TODO: Import AppRoutingModule from app-routing.module.ts


//*** TODO: Add AppRoutingModule into into the imports array below so that it's available
//          to the application
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, CoreModule ],
  declarations: [ AppComponent, CustomersComponent, OrdersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
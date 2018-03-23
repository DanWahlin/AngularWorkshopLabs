import { NgModule } from '@angular/core';
//*** TODO: Import the RouterModule and Routes objects from @angular/router
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';

/***  
 
  TODO: Add the following routes into the routes array below:

  Route Path              Component
  __________________________________________
  customers               CustomersComponent
  orders/:customerId      OrdersComponent

***/
const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/customers' },
  { path: 'customers',  component: CustomersComponent },
  { path: 'orders/:customerId', component: OrdersComponent }
];

@NgModule({
  /*** 
    TODO: Pass routes into the forRoot() function below.
  ***/
  imports: [ RouterModule.forRoot(routes) ],

  /*** 
  TODO: Add RouterModule to the exports below so that it is available to any 
        other module that imports this module.
  ***/
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
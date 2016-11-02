//*** TODO: Import the RouterModule and Routes objects from @angular/router


import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent }   from './orders/orders.component';

/***  
  TODO: Add the following routes into the app_routes array below:

  Route Path              Component
  __________________________________________
  customers               CustomersComponent
  orders/:customerId      OrdersComponent

***/

const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/customers' },


];

/*** 
  TODO: Assign the app_routing constant below to RouterModule.forRoot().
        Pass app_routes into the forRoot() function.
***/


export const app_routing = 
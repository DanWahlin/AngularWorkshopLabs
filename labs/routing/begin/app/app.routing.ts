import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent }   from './orders/orders.component';

const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/customers' },
  { path: 'customers',  component: CustomersComponent },
  { path: 'orders/:customerId', component: OrdersComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);
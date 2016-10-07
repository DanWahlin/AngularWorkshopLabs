import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';
import { ICustomer } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    
    customers: ICustomer[];

    constructor(private dataService: DataService) { }

    ngOnInit() { 
        this.dataService.getCustomers()
            .subscribe((customers: ICustomer[]) => {
                this.customers = customers;
        });
    }

}
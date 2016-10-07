import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/data.service';
import { IOrder } from '../shared/interfaces';

@Component({
    moduleId: module.id, 
    selector: 'orders',
    templateUrl: 'orders.component.html'
})
export class OrdersComponent implements OnInit {

    orders: IOrder[];

    constructor(private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() { 
        const id = +this.route.snapshot.params['customerId'];
        this.dataService.getOrders(id)
            .subscribe((orders: IOrder[]) => {
                this.orders = orders;
        });
    }

}
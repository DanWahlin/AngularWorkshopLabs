import { Component, OnInit } from '@angular/core';
//*** TODO: Import ActivatedRoute from @angular/router


import { DataService } from '../core/data.service';
import { IOrder } from '../shared/interfaces';

@Component({
    selector: 'orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

    orders: IOrder[] = [];

    /*** 
        TODO: Inject ActivatedRoute into the constructor. 
              Give it a name of "route" and make it private.
    ***/
    constructor(private dataService: DataService) { }

    ngOnInit() { 
        /***
            TODO: 1. Grab the customerId route parameter value and assign it to id using
                     Number(this.route.snapshot.paramMap.get('customerId'));
        ***/

        const id = /* add code here */
        this.dataService.getOrders(id)
            .subscribe((orders: IOrder[]) => {
                this.orders = orders;
        });
    }

}
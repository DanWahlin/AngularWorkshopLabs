import { Component, OnInit } from '@angular/core';
//*** TODO: Import ActivatedRoute from @angular/router


import { DataService } from '../core/data.service';
import { IOrder } from '../shared/interfaces';

@Component({
    selector: 'orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

    orders: IOrder[];

    /*** 
        TODO: Inject ActivatedRoute into the constructor. 
              Give it a name of "route" and make it private.
    ***/
    constructor(private dataService: DataService) { }

    ngOnInit() { 
        /***
            TODO: 1. Grab the customerId route parameter value using
                     this.route.snapshot.params['customerId'] 

                  2. Convert the route parameter value to an integer 
                     and assign it to the id constant below.
        ***/

        const id = 
        this.dataService.getOrders(id)
            .subscribe((orders: IOrder[]) => {
                this.orders = orders;
        });
    }

}
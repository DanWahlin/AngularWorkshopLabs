import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder } from './interfaces';

@Injectable()
export class DataService {
    
    _baseUrl: string = '';

    constructor(private http: Http) { }
    
    getCustomers() : Observable<ICustomer[]> {        
        return this.http.get(this._baseUrl + 'customers.json')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    getOrders(id: number) : Observable<IOrder[]> {
        return this.http.get(this._baseUrl + 'orders.json')
                    .map((res: Response) => {
                        const orders = res.json();
                        return orders.filter((order: IOrder) => order.customerId === id);
                    })
                    .catch(this.handleError);               
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
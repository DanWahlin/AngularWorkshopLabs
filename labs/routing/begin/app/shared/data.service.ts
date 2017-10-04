import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder } from './interfaces';

@Injectable()
export class DataService {
    
    _baseUrl: string = '';

    constructor(private http: HttpClient) { }
    
    getCustomers() : Observable<ICustomer[]> {        
        return this.http.get<ICustomer[]>(this._baseUrl + 'customers.json')
                    .map((customers: ICustomer[]) => customers)
                    .catch(this.handleError);
    }

    getOrders(id: number) : Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this._baseUrl + 'orders.json')
                    .map((orders: IOrder[]) => {
                        return orders.filter((order: IOrder) => order.customerId === id);
                    })
                    .catch(this.handleError);               
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
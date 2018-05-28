import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../shared/interfaces';

@Injectable()
export class DataService {
    
    _baseUrl: string = 'assets/';

    constructor(private http: HttpClient) { }
    
    getCustomers() : Observable<ICustomer[]> {        
        return this.http.get<ICustomer[]>(this._baseUrl + 'customers.json')
            .pipe(
                map((customers: ICustomer[]) => customers),
                catchError(this.handleError)
            );

    }

    getOrders(id: number) : Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this._baseUrl + 'orders.json')
            .pipe(
                map((orders: IOrder[]) => {
                    return orders.filter((order: IOrder) => order.customerId === id);
                }),
                catchError(this.handleError)   
            )
       
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
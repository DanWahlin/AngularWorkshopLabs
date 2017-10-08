import { Injectable } from '@angular/core';

//*** TODO: Import the HttpClient and HttpErrorResponse objects from the @angular/http module


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { Sorter } from './sorter';

@Injectable()
export class DataService {
  
  url: string = 'https://swapi.co/api/';
  
  //*** TODO: Inject the HttpClient and Sorter services into the constructor 
  //***       (name the parameters "http" and "sorter" and make them private)
  constructor() { }
  
  getFilms() {
    //*** TODO: Use the http get() function to retrieve films 
    //***       (see the README for the code to use here)



  }
  
  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error); 
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      //return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Server error');
  }
  
}
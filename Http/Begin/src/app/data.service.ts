import { Injectable } from '@angular/core';

//*** TODO: Import the HttpClient and HttpErrorResponse objects 
//          from the @angular/common/http module


import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators'; 

import { Sorter } from './sorter';

@Injectable()
export class DataService {
  
  url: string = 'https://swapi.dev/api/';
  
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
      return throwError(errMessage);
    }
    return throwError(error || 'Server error');
  }
  
}
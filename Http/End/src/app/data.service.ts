import { Injectable } from '@angular/core';

//*** TODO: Import the HttpClient and HttpErrorResponse objects from the Angular Http module
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators'; 

import { Sorter } from './sorter';

@Injectable()
export class DataService {
  
  url: string = 'https://swapi.co/api/';
  
  //*** TODO: Inject the HttpClient and Sorter services into the constructor 
  //***       (name the parameters "http" and "sorter" and make them private)
  constructor(private http: HttpClient, private sorter: Sorter) { }
  
  getFilms() {
    //*** TODO: Use the Http get() function to retrieve films 
    //***       (see the README for the code to use here)
    return this.http.get(this.url + 'films')
      .pipe(
        map(data => {
            let films = data['results'];
            this.sorter.sort(films, 'episode_id');
            return films;
          }),
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error); 
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server error');
  }
  
}
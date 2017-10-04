import { Injectable } from '@angular/core';

//*** TODO: Import the Http and Response objects from the Angular Http module
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { Sorter } from './sorter';

@Injectable()
export class DataService {
  
  url: string = 'https://swapi.co/api/';
  
  //*** TODO: Inject the Http and Sorter services into the constructor 
  //***       (name the parameters "http" and "sorter" and make them private)
  constructor(private http: HttpClient, private sorter: Sorter) { }
  
  getFilms() {
    //*** TODO: Use the Http get() function to retrieve films 
    //***       (see the README for the code to use here)
    return this.http.get(this.url + 'films')
               .map(data => {
                    let films = data['results'];
                    this.sorter.sort(films, 'episode_id');
                    return films;
                 })
               .catch(this.handleError);
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
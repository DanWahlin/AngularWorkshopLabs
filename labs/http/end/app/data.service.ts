import { Injectable } from '@angular/core';

//*** TODO: Import the Http and Response objects from the Angular Http module
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { Sorter } from './sorter';

@Injectable()
export class DataService {
  
  url: string = 'http://swapi.co/api/';
  
  //*** TODO: Inject the Http and Sorter services into the constructor 
  //***       (name the parameters "http" and "sorter" and make them private)
  constructor(private http: Http, private sorter: Sorter) { }
  
  getFilms() {
    //*** TODO: Use the Http get() function to retrieve films 
    //***       (see the README for the code to use here)
    return this.http.get(this.url + 'films')
               .map((response: Response) => {
                    let films = response.json().results;
                    this.sorter.sort(films, 'episode_id');
                    return films;
                 })
               .catch(this.handleError);
  }
  
  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  
}
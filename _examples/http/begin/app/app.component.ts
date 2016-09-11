import { Component, OnInit } from '@angular/core';

//*** TODO: Import the DataService module here from './data.service'


@Component({ 
  selector: 'app-component',
  templateUrl: 'app/app.component.html',
})
export class AppComponent implements OnInit {
  
  films: any[];  
  selectedFilm: any;
  
  //*** TODO: Inject DataService (name the parameter "dataService" and make it private)
  constructor() {  }
  
  ngOnInit() {
      //*** TODO: Subscribe to the DataService service's 
      //***       getFilms() Observable (see the readme if you need help)



  }
  
}
import { Component, OnInit } from '@angular/core';

//*** TODO: Import the DataService module here from './data.service'
import { DataService } from './data.service';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  
  films: any[] = [];  
  selectedFilm: any = null;
  
  //*** TODO: Inject DataService (name the parameter dataService and make it private)
  constructor(private dataService: DataService) {  }
  
  ngOnInit() {
    //*** TODO: Subscribe to the DataService service's 
    //***       getFilms() Observable (see the readme if you need help)
    this.dataService.getFilms().subscribe(films => this.films = films);
  }
  
}
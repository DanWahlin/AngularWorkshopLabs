# Angular Services and Http "Try It" Exercise - 15 Minutes

This example shows how Http can be used in services to retrieve
remote data from a server.

## Steps

1. Open **app/app.module.ts** and complete the TODO tasks.
2. Open **app/data.service.ts** and complete the TODO tasks.
3. Add the following code into the **getFilms()** function in data.services.ts:
```
    return this.http.get(this.url + 'films')
               .map(data => {
                    let films = data['results'];
                    this.sorter.sort(films, 'episode_id');
                    return films;
                 })
               .catch(this.handleError);
```
4. Open **app/app.component.ts** and complete the TODO tasks.
5. To subscribe to the Observable returned from DataService's getFilms() function add the following code in ngOnInit():
```
  this.dataService.getFilms().subscribe((films) => {
    this.films = films;
  });
```
6. Press the **Run** button (in the upper-right corner) on the Plunker toolbar to try out the application! A list of
   Star Wars films should be displayed. Click a movie to get more details about it.


## Bonus

**Use the Async Pipe**

1. Remove the subscribe in the `AppComponent`

2. Set the films property in the `AppComponent` to the return value of  `this.dataService.getFilms()`
```
this.films = this.dataService.getFilms();
```

3. Add the async pipe to the template's *ngFor

```
*ngFor="let film of films | async"
```


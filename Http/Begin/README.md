# Angular Services and Http Lab - 15 Minutes

This example shows how Http can be used in services to retrieve remote data from a server.

## Exercise 1

1. Open `src/app/app.module.ts` and complete the TODO tasks.

2. Open `src/app/data.service.ts` and complete the TODO tasks.

3. Add the following code into the `getFilms()` function in data.services.ts:

```
return this.http.get(this.url + 'films')
  .pipe(
    map(data => {
        let films = data['results'];
        this.sorter.sort(films, 'episode_id');
        return films;
      }),
    catchError(this.handleError)
  );
```
4. Open `src/app/app.component.ts` and complete the TODO tasks.

5. To subscribe to the Observable returned from DataService's getFilms() function add the following code in ngOnInit():

```
this.dataService.getFilms().subscribe((films) => {
  this.films = films;
});
```

6. A list of Star Wars films should be displayed. Click a movie to get more details about it.


## Bonus Exercise (if time permits)

1. Remove the subscribe function call in `AppComponent`

2. Set the films property in `AppComponent` to the following value:

```
this.films = this.dataService.getFilms();
```

3. Add the async pipe to the template's *ngFor

```
*ngFor="let film of films | async"
```


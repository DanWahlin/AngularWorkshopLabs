# Angular Walk-Through Lab - 15 Minutes

This example walks you through the fundamentals of an Angular application.

## Exercise 1: Exploring an Angular Project

1. Angular relies on "components" to render the user interface in an application.

2. To see a component, open `src/app/app.component.ts`. 

3. Note the following:
   * An import statement is at the top that imports Component.
   * A Component decorator is defined with several properties including the
     `app-root` selector for the component and an inline HTML template
   * A component class is defined that includes a constructor and an ngOnInit() function.

4. Open `src/index.html`.

5. Locate the <app-root> element in the page. This acts as the 
   root component for the entire application.

## Exercise 2: Creating a Project using the Angular CLI

1. Install Node.js 8.10 or higher (https://nodejs.org) and an editor (VS Code is recommended - https://code.visualstudio.com) if you don't have them installed already.

2. Install the Angular CLI by opening a command prompt and running the following:

    `npm install -g @angular/cli`

3. Create a new Angular project by running the following command:

    `ng new my-project`

4. Once the project has been created `cd` into the `my-project` directory and leave
   the console window open.

6. Open `my-project` in an editor.

7. Locate the `src/app/app.component.ts` file. Notice that the Component decorator
   is different than the previous one and references an external HTML template. Also
   notice that it includes a property called `title`.

8. Open the HTML template for the component and notice the `{{ title }}` section. This is
   used to display the value of the `title` property discovered earlier in the component.

9. Build the project and view it in the browser by using the following command:

    `ng serve -o`
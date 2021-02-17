# TodoListApp

The aim of this project is to set up an Angular web application that can connect to a remote REST API, fetch data to the UI and update UI according to some set of user interactions. This project was generated with Angular CLI version 11.1.3.

## Development server

Run `npm install` to install all packages and dependencies this project has to your local machine.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Workflow

When the project is initialized, it fectches todos from https://jsonplaceholder.typicode.com/todos API endpoint.
JSONPlaceholder REST API also has a users endpoint which is https://jsonplaceholder.typicode.com/users. 
By combining these two endpoints, a table consists  of a list of todos and their corresponding users is created.
When status button is clicked, user can change the order of the list between ascending and descending orders.
When user click edit a edit modal opens and user can edit todo's title and status. When user click save todo's infromation changes.

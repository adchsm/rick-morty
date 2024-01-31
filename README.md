# RickMorty

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## How to get going

1. From the root directory, run `npm install`
2. Depending on your local machine, you may need to install the [Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli)
3. Run `ng serve` from the root directory to run the app locally on `http://localhost:4200/`
4. If you can't get things running locally, the application has been stood up on GitHub pages here: [https://adchsm.github.io/rick-morty/](https://adchsm.github.io/rick-morty/)

## Known quirks and improvements

- I've written unit tests for the api service and NgRx store - the actions, effects, reducer and selectors. I try to keep as much business logic in these areas to avoid overly-bloating components.
- Given more time (and certainly for production-ready applications), I would have written additional unit tests to cover some of the more business critical pieces in the container-components.
- I would have liked to have implemented an infinity-scroll feature for the autocomplete component, where scrolling towards the end of the list would have triggered the next page of results to have been loaded in. This has been a time-constraint issue. You should still be able to find any character you're looking for by searching.
- There are a number of style improvements and architecture that could be completed, for example, having re-usable colour variables etc.
- The app uses Angular 17 which has introduced a few new features I've not used before, these include the new control flow syntax and signals. I may not have used these in the most effective way, but wanted to try them out.
- I pulled the garish colours for the app from the Rick and Morty logo, I hope it goes without saying these aren't the colours I'd normally use :D

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

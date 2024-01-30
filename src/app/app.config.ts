import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { RickMortyEffects } from './store/effects/rick-morty.effects';
import { rickMortyReducer } from './store/reducer/rick-morty.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore({ rickMorty: rickMortyReducer }),
    provideEffects([RickMortyEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: isDevMode() }),
    provideHttpClient(),
  ],
};

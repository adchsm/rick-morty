import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import {
  getCharacters,
  getCharactersFailure,
  getCharactersSuccess,
} from '../actions/rick-morty.actions';

@Injectable()
export class RickMortyEffects {
  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacters),
      exhaustMap(({ searchTerm }) =>
        this.rickMortyService.getCharacters(searchTerm).pipe(
          map(({ results }) => getCharactersSuccess({ characters: results })),
          catchError((error) => of(getCharactersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private rickMortyService: RickMortyService
  ) {}
}

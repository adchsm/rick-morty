import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import {
  mockCharacterResponse,
  mockCharacters,
} from '../../test/rick-morty.mock';
import {
  getCharacters,
  getCharactersFailure,
  getCharactersSuccess,
} from '../actions/rick-morty.actions';
import { RickMortyEffects } from './rick-morty.effects';

describe('RickMortyEffects', () => {
  let actions$: Observable<any>;
  let effects: RickMortyEffects;
  let store: Store;
  let rickMortyService: RickMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [
        RickMortyEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        HttpClient,
        RickMortyService,
      ],
    });

    effects = TestBed.inject(RickMortyEffects);
    store = TestBed.inject(Store);
    rickMortyService = TestBed.inject(RickMortyService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getCharacters$', () => {
    it('should dispatch a getCharactersSuccess action after a successful api call', () => {
      spyOn(rickMortyService, 'getCharacters').and.returnValue(
        of({ ...mockCharacterResponse })
      );

      actions$ = hot('-a---', { a: getCharacters() });

      const expected = cold('-a---', {
        a: getCharactersSuccess({ characters: [...mockCharacters] }),
      });

      expect(effects.getCharacters$).toBeObservable(expected);
    });

    it('should dispatch a getCharactersFailure action after a failed api call', () => {
      spyOn(rickMortyService, 'getCharacters').and.returnValue(
        throwError(() => new Error(''))
      );

      actions$ = hot('-a---', { a: getCharacters() });

      const expected = cold('-a---', {
        a: getCharactersFailure({ error: new Error('') }),
      });

      expect(effects.getCharacters$).toBeObservable(expected);
    });
  });
});

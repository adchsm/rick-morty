import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RickMortyEffects } from './rick-morty.effects';

describe('RickMortyEffects', () => {
  let actions$: Observable<any>;
  let effects: RickMortyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RickMortyEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RickMortyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

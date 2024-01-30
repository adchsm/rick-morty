import { RickMortyState } from '../../models/rick-morty.models';
import { mockCharacters } from '../../test/rick-morty.mock';
import {
  getCharacters,
  getCharactersFailure,
  getCharactersSuccess,
} from '../actions/rick-morty.actions';
import { rickMortyReducer } from './rick-morty.reducer';

describe('RickMortyReducer', () => {
  const initialState: RickMortyState = {
    characters: {
      data: null,
      loading: false,
      error: null,
    },
  };

  it('should handle getCharacters action', () => {
    const action = getCharacters();
    const state = rickMortyReducer(initialState, action);

    expect(state).toEqual({
      characters: {
        data: null,
        loading: true,
        error: null,
      },
    });
  });

  it('should handle getCharactersSuccess action', () => {
    const action = getCharactersSuccess({ characters: [...mockCharacters] });
    const state = rickMortyReducer(initialState, action);

    expect(state).toEqual({
      characters: {
        data: [...mockCharacters],
        loading: false,
        error: null,
      },
    });
  });

  it('should handle getCharactersFailure action', () => {
    const error = 'An error occurred';
    const action = getCharactersFailure({ error });
    const state = rickMortyReducer(initialState, action);

    expect(state).toEqual({
      characters: {
        data: null,
        loading: false,
        error,
      },
    });
  });
});

import { createReducer, on } from '@ngrx/store';
import { RickMortyState } from '../../models/rick-morty.models';
import {
  getCharacters,
  getCharactersFailure,
  getCharactersSuccess,
} from '../actions/rick-morty.actions';

export const initialState: RickMortyState = {
  characters: {
    data: null,
    loading: false,
    error: null,
  },
};

export const rickMortyReducer = createReducer(
  initialState,
  on(getCharacters, (state) => ({
    ...state,
    characters: {
      data: null,
      loading: true,
      error: null,
    },
  })),
  on(getCharactersSuccess, (state, { characters }) => ({
    ...state,
    characters: {
      data: characters,
      loading: false,
      error: null,
    },
  })),
  on(getCharactersFailure, (state, { error }) => ({
    ...state,
    characters: {
      data: null,
      loading: false,
      error,
    },
  }))
);

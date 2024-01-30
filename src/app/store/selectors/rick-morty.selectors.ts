import { createSelector } from '@ngrx/store';
import { RickMortyState } from '../../models/rick-morty.models';

export const selectRickMorty = (state: any): RickMortyState => state.rickMorty;

export const selectCharactersState = createSelector(
  selectRickMorty,
  (state) => state.characters
);

export const selectCharactersLoading = createSelector(
  selectCharactersState,
  (state) => state.loading
);

export const selectCharactersData = createSelector(
  selectCharactersState,
  (state) => state.data
);

export const selectCharactersError = createSelector(
  selectCharactersState,
  (state) => state.error
);

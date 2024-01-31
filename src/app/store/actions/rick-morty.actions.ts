import { createAction, props } from '@ngrx/store';
import { RICK_MORTY_CONSTANTS } from '../../constants/rick-morty.constants';
import { Character } from '../../models/rick-morty.models';

export const getCharacters = createAction(
  `[${RICK_MORTY_CONSTANTS.STORE_KEY}] get characters`,
  props<{ searchTerm?: string }>()
);

export const getCharactersSuccess = createAction(
  `[${RICK_MORTY_CONSTANTS.STORE_KEY}] get characters success`,
  props<{ characters: Character[] }>()
);

export const getCharactersFailure = createAction(
  `[${RICK_MORTY_CONSTANTS.STORE_KEY}] get characters failure`,
  props<{ error: any }>()
);

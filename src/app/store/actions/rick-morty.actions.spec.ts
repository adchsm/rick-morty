import { RICK_MORTY_CONSTANTS } from '../../constants/rick-morty.constants';
import { Character } from '../../models/rick-morty.models';
import { mockCharacters } from '../../test/rick-morty.mock';
import {
  getCharacters,
  getCharactersFailure,
  getCharactersSuccess,
} from './rick-morty.actions';

describe('RickMortyActions', () => {
  const characters: Character[] = [...mockCharacters];

  it('should create the getCharacters action', () => {
    const action = getCharacters({});

    expect({ ...action }).toEqual({
      type: `[${RICK_MORTY_CONSTANTS.STORE_KEY}] get characters`,
    });
  });

  it('should create the getCharactersSuccess action', () => {
    const action = getCharactersSuccess({
      characters: characters,
    });

    expect({ ...action }).toEqual({
      type: `[${RICK_MORTY_CONSTANTS.STORE_KEY}] get characters success`,
      characters: characters,
    });
  });

  it('should create the getCharactersFailure action', () => {
    const error = 'An error occurred';
    const action = getCharactersFailure({ error });

    expect({ ...action }).toEqual({
      type: `[${RICK_MORTY_CONSTANTS.STORE_KEY}] get characters failure`,
      error,
    });
  });
});

import { RickMortyState } from '../../models/rick-morty.models';
import { mockCharacters } from '../../test/rick-morty.mock';
import {
  selectCharactersData,
  selectCharactersError,
  selectCharactersLoading,
} from './rick-morty.selectors';

describe('RickMortySelectors', () => {
  const state: RickMortyState = {
    characters: {
      data: [...mockCharacters],
      loading: false,
      error: null,
    },
  };

  it('should select the characters loading state', () => {
    const selectedLoading = selectCharactersLoading.projector(state.characters);

    expect(selectedLoading).toEqual(false);
  });

  it('should select the characters data state', () => {
    const selectedData = selectCharactersData.projector(state.characters);

    expect(selectedData).toEqual([...mockCharacters]);
  });

  it('should select the characters error state', () => {
    const selectedError = selectCharactersError.projector(state.characters);

    expect(selectedError).toEqual(null);
  });
});

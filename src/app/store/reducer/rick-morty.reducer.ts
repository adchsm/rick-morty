import { createReducer } from '@ngrx/store';
import { RickMortyState } from '../../models/rick-morty.models';

export const initialState: RickMortyState = {};

export const rickMortyReducer = createReducer(initialState);

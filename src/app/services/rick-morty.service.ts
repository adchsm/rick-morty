import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/rick-morty.models';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private baseUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private httpClient: HttpClient) {}

  public getCharacters(): Observable<CharacterResponse> {
    return this.httpClient.get<CharacterResponse>(`${this.baseUrl}/character`);
  }
}

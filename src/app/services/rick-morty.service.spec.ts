import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CharacterResponse } from '../models/rick-morty.models';
import { mockCharacterResponse } from '../test/rick-morty.mock';
import { RickMortyService } from './rick-morty.service';

describe('RickMortyService', () => {
  let service: RickMortyService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RickMortyService],
    });

    service = TestBed.inject(RickMortyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch characters', () => {
    const response: CharacterResponse = { ...mockCharacterResponse };

    service.getCharacters().subscribe((response) => {
      expect(response).toEqual(response);
    });

    const req = httpTestingController.expectOne(
      `${service['baseUrl']}/character`
    );
    expect(req.request.method).toBe('GET');

    req.flush(response);
  });
});

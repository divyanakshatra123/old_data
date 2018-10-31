import { TestBed } from '@angular/core/testing';

import { MoviebackService } from './movieback.service';

describe('MoviebackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviebackService = TestBed.get(MoviebackService);
    expect(service).toBeTruthy();
  });
});

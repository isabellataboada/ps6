import { TestBed } from '@angular/core/testing';

import { WeatherServiceAsyncService } from './weather-service-async.service';

describe('WeatherServiceAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeathertServiceAsyncService = TestBed.get(WeatherServiceAsyncService);
    expect(service).toBeTruthy();
  });
});

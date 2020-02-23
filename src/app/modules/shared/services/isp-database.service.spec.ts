import { TestBed } from '@angular/core/testing';

import { IspDatabaseService } from './isp-database.service';

describe('IspDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IspDatabaseService = TestBed.get(IspDatabaseService);
    expect(service).toBeTruthy();
  });
});

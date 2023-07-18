/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeñalService } from './señal.service';

describe('Service: Señal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeñalService]
    });
  });

  it('should ...', inject([SeñalService], (service: SeñalService) => {
    expect(service).toBeTruthy();
  }));
});

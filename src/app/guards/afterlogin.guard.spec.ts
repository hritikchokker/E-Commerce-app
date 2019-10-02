import { TestBed, async, inject } from '@angular/core/testing';

import { AfterloginGuard } from './afterlogin.guard';

describe('AfterloginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfterloginGuard]
    });
  });

  it('should ...', inject([AfterloginGuard], (guard: AfterloginGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, async, inject } from '@angular/core/testing';

import { BeforeloginGuard } from './beforelogin.guard';

describe('BeforeloginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeforeloginGuard]
    });
  });

  it('should ...', inject([BeforeloginGuard], (guard: BeforeloginGuard) => {
    expect(guard).toBeTruthy();
  }));
});

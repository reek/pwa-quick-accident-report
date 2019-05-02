import { TestBed, async, inject } from '@angular/core/testing';

import { UserLoginGuard } from './user-logged.guard';

describe('UserLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLoginGuard]
    });
  });

  it('should ...', inject([UserLoginGuard], (guard: UserLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});

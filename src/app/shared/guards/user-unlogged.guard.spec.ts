import { TestBed, async, inject } from '@angular/core/testing';

import { UserUnloggedGuard } from './user-unlogged.guard';

describe('UserUnloggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserUnloggedGuard]
    });
  });

  it('should ...', inject([UserUnloggedGuard], (guard: UserUnloggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { GitUssersService } from './git-ussers.service';

describe('GitUssersService', () => {
  let service: GitUssersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitUssersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

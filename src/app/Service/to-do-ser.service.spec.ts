import { TestBed } from '@angular/core/testing';

import { ToDoSerService } from './to-do-ser.service';

describe('ToDoSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoSerService = TestBed.get(ToDoSerService);
    expect(service).toBeTruthy();
  });
});

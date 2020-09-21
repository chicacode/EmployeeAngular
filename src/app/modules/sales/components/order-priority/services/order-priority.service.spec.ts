import { TestBed } from '@angular/core/testing';

import { OrderPriorityService } from './order-priority.service';

describe('OrderPriorityService', () => {
  let service: OrderPriorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPriorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

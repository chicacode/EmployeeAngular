import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPriorityComponent } from './order-priority.component';

describe('OrderPriorityComponent', () => {
  let component: OrderPriorityComponent;
  let fixture: ComponentFixture<OrderPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export interface Order {
    OrderId: number;
    CustomerId: number;
    ProductId: number;
    ProductQuantity: number;
    EmployeeId: number;
    OrderPriorityId: number;
    OrderState: OrderState;
    CreationOrder: Date;
}

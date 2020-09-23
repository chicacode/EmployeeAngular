import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export interface Order {
    OrderId: number;
    CustomerId: number;
    ProductId: number;
    ProductQuantity: number;
    EmployeeId: number;
    OrderState: OrderState;
    CreationOrder: Date;
}

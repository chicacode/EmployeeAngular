import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export interface Order {
    OrderId: number;
    OrderNumber: string;
    OrderState: OrderState;
    OrderPriority: OrderPriority;
    CreationOrder: Date;
    DoneByEmployeeOrder: Date;
    OrderCompleted: Date;
    PriceItem: number;
    PriceItemIva: number;
    TotalPrice: number;
    ProductId: number;
    ProductQuantity: number;
}

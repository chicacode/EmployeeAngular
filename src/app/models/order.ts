
export interface Order {
    OrderId: number;
    OrderNumber: string;
    OrderPriority: OrderPriority;
    OrderState: OrderState;
    CreationOrder: Date;
    DoneByEmployeeOrder: Date;
    OrderCompleted: Date;
    AddressId?: number;
    CustomerId?: number;
    EmployeeId?: number;
}

import { OrderPriority } from '../models/enums/orderpriotity';
import { OrderState } from '../models/enums/orderstate';

export interface Order {
    id: number;
    orderNumber: string;
    orderPriority: OrderPriority;
    orderState: OrderState;
    creationOrder: Date;
    doneByEmployeeOrder: Date;
    orderCompleted: Date;
    addressId?: number;
    customerId?: number;
    employeeId?: number;
}

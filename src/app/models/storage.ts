import { Product } from './product';
import { Movements } from './movements';
import { Warehouse } from './warehouse';

export interface Storage {
    StorageId: number;
    lastUpdate: Date;
    partialQuantity: number;
    productId: number;
    product: Product;
    WarehouseId: number;
    Warehouse: Warehouse;
    InputOutputs: Movements[];
}

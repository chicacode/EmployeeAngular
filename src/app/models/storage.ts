import { Product } from './product';
import { Warehouse } from './warehouse';

export interface Storage {
    id: number;
    lastUpdate: Date;
    partialQuantity: number;
    productId: number;
    product: Product;
    warehouseId: number;
    Warehouse: Warehouse;
}

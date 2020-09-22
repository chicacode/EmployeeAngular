import { Category } from './category';

export interface Product {
    productId: number;
    name: string;
    description: string;
    totalQuantity: number;
    categoryId: number;
    category: Category;
    storageList: Storage[];
}

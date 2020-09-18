import { Category } from './category';

export interface Product {
    ProductId: number;
    name: string;
    description: string;
    totalQuantity: string;
    CategoryId: number;
    category: Category;
}

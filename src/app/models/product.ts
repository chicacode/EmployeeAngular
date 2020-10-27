
export interface Product {
    id: number;
    name: string;
    description: string;
    totalQuantity: number;
    price: number;
    categoryName: string;
    storageList: Storage[];
}

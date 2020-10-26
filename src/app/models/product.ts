
export interface Product {
    productId: number;
    name: string;
    description: string;
    totalQuantity: number;
    price: number;
    categoryName: string;
    storageList: Storage[];
}

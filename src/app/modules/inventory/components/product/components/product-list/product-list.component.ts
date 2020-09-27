import { Component, OnInit } from '@angular/core';


import { Product } from '../../../../../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void{
    this.productService.getProducts().subscribe(
      response => { this.products = response;  console.log(response); }
    );
  }

  delete(id: number): void{
    this.productService.deleteProduct(id).subscribe(data => {
      alert('Product with ID ' + id + ' has been deleted');
      location.reload();
    });
  }
}

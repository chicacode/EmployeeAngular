import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../../../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor( private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void{
    this.productService.getProducts().subscribe(
      response => { this.products = response;  console.log(response); }
    );
  }
}

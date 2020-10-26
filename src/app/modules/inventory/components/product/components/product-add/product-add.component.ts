import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { Product } from '@app/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  product: Product;
  categories = [
    { id: 0, name: 'Clothes' },
    { id: 1, name: 'Merchandise' },
    { id: 2, name: 'Minor' }
  ];

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      TotalQuantity: ['', Validators.required],
      Price:  ['', Validators.required],
      CategoryName: ['', Validators.required],
    });
  }
  goBack(): void {
    this.location.back();
  }

  create(): void {
    const product: Product = Object.assign({}, this.productForm.value);
    console.log(product);
    this.productService.addProduct(product)
    .subscribe (() => this.goBack());
  }
}

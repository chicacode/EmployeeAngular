import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { Product } from '@app/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  productId: any;
  product: Product;

  constructor(
    private route: ActivatedRoute,
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

  upData(product: Product): any{
    this.productForm.patchValue({
      Name: product.name,
      Description: product.description,
      TotalQuantity: product.totalQuantity,
      Price: product.price,
      CategoryName: product.categoryName
    });
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productId = id;
    this.productService.getProduct(this.productId.toString())
      .subscribe(employee => {
        this.product = employee;
        this.upData(employee);
      });
  }

  goBack(): void {
    this.location.back();
  }

  update(): void{
    const product: Product = Object.assign({}, this.productForm.value);
    const id = +this.route.snapshot.paramMap.get('id');
    this.productId = id;
    // tslint:disable-next-line: radix
    this.productId = parseInt( this.productId );
    console.log( typeof this.productId);

    product.productId = this.productId;
    this.productService.updateProduct(product)
    .subscribe (() => this.goBack());
  }

}

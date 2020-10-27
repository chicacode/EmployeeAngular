import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { Storage } from '@app/models/storage';
import { Warehouse } from '@app/models/warehouse';
import { Product } from '@app/models/product';

import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-storage-add',
  templateUrl: './storage-add.component.html',
  styleUrls: ['./storage-add.component.scss']
})
export class StorageAddComponent implements OnInit {

  storageForm: FormGroup;
  storage: Storage;
  warehouse: Warehouse[];
  products: Product[];

  constructor(
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.storageForm = this.formBuilder.group({
      LastUpdate: ['', Validators.required],
      PartialQuantity: ['', Validators.required],
      productId: ['', Validators.required],
      product: ['', Validators.required],
      warehouseId:  ['', Validators.required]
    });
  }

  goBack(): void {
    this.location.back();
  }


  create(): void {
    const storage: Storage = Object.assign({}, this.storageForm.value);
    console.log(storage);
    this.storageService.addStorage(storage)
    .subscribe (() => this.goBack());
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { Category } from '../../../../../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  categoryForm: FormGroup;
  category: Category;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      CategoryId: ['', Validators.required],
      Name: ['', Validators.required]
    });
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    const category: Category = Object.assign({}, this.categoryForm.value);

    this.categoryService.addCategory(category)
    .subscribe (() => this.goBack());
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../../../../models/category';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }
  getCategoryList(): void{
    this.categoryService.getCategories().subscribe(
      response => { this.categories = response;  console.log(response); }
    );
  }

  delete(id: number): void{
    this.categoryService.deleteCategory(id).subscribe(data => {
      alert('Category with ID ' + id + ' has been deleted');
      location.reload();
    });
  }
}

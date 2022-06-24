import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from './category';
import { CategoryService } from './category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList : Category[] = []
  newCategory : Category = {} as Category
  
  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.loadData()
  }

  
  loadData() {
    this.service.getCategoryList().subscribe(items => {
      this.categoryList = items
    })    
  }
 
  saveData(form: NgForm) {
    
        this.service.createCategory(this.newCategory).subscribe(item => {
        form.resetForm()
        this.newCategory = {} as Category
        this.loadData()
      })
    }
  
  }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private serverApi = 'https://music-api-2022.herokuapp.com/documentation/#/category'

   constructor(private httpClient: HttpClient) { }

   createCategory(category: Category) : Observable<Category>{
    return this.httpClient.post<Category>(this.serverApi, category)
   }

   getCategoryList() : Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.serverApi)
  }

}

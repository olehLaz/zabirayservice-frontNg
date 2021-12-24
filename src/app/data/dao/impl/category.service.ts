import { Injectable } from '@angular/core';
import {CategoryDAO} from "../interface/categoryDAO";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../model/category";
import {Observable} from "rxjs";
import {CategorySearchValue} from "../../search/searchObjects";

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements CategoryDAO {

  url = 'http://localhost:8080/category'

  constructor(private httpClient: HttpClient // для выполнения http запросов

  ) { }

  add(t: Category): Observable<Category>{
    return this.httpClient.post<Category>(this.url +'/add', t);
  }

  delete(id: number): Observable<Category>{
    return this.httpClient.delete<Category>(this.url +'/delete'+ id);;
  }

  get(id: number): Observable<Category>{
    return this.httpClient.get<Category>(this.url +'/id'+id);
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url +'/all');
  }

  update(t: Category): Observable<Category> {
    return this.httpClient.put<Category>(this.url +'/update', t);
  }

  searchCategory(categorySearchValue: CategorySearchValue): Observable<Category[]> {
    return this.httpClient.post<Category[]>(this.url + '/search', categorySearchValue);
  }
}

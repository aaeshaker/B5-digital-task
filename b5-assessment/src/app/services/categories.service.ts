import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl: string = environment.apiRoot + 'products/categories';

  constructor(private _httpClient: HttpClient) { }

  getAllProductsCategories(): Observable<string[]> {
    return this._httpClient.get(`${this.baseUrl}`).pipe(map((res: any) => <string[]>res));
  }
}

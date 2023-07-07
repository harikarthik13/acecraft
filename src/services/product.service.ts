import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import Products.ts(interface - properties)
import { Products } from 'src/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
url:string='https://acecraft.onrender.com/Products'
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<Products[]>(this.url);
  }

  getProductsById(id: number) {
    return this.http.get<Products[]>(this.url + '?id=' + id);
  }
}

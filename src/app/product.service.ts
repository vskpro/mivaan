import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get('assets/json/categories-new.json');
  }

  getProducts(): Observable<any> {
    return this.http.get('assets/json/products.json');
  }

  getProductsByCategory(id) {
    let tempArr = [];
    console.log(id);
    return new Promise((resolve, reject) => {
      this.getProducts().subscribe(products => {
        tempArr = products.filter(product => {
          console.log(product);
          return product.category === Number(id);
        });
        console.log(tempArr);
        if (tempArr.length) {
          resolve(tempArr);
        } else {
          reject(null);
        }
      });
    });

  }

}

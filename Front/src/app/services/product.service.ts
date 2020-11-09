import { Injectable } from '@angular/core';
import { Product } from '../models.ts/productClass';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static URL = 'http://localhost:3000/product';
  private products: Product[] = [];
  productsSubject = new Subject<Product[]>();

  constructor(private http: HttpClient ) { }

  emitProductsSubject(): void {
    this.productsSubject.next(this.products);
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get(ProductService.URL)
      .pipe(map((productsArray: any[]) => {
        return productsArray.map((product => {
          return new Product(product);
        }));
      }));
  }

  getOneProduct(id: string): Observable<any> {
    return this.http.get<Product>(ProductService.URL + '/' + id)
    .pipe(map(res =>  {
      return res || {};
    }));
  }


  addNewProduct(product: Product): any {
    // console.log('NOUVEAU PRODUIT:', product);
    return this.http.post<Product>(ProductService.URL, product);
  }


}

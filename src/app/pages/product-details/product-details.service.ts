import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private dataUrl = 'assets/stub/product-data.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  getProductById(id: any): Observable<any> {
    return this.getProducts().pipe(
      map((products: any[]) => products.find(product => product.productId === id))
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private dataUrl = 'assets/stub/product-data.json';

  private mymosscart = new BehaviorSubject(this.getCartItems());
  mymosscart$ = this.mymosscart.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  getProductById(id: any): Observable<any> {
    return this.getProducts().pipe(
      map((products: any[]) => products.find(product => product.productId === id))
    );
  }

  addToCart(productId: number, curProdQuantity: number) {
    const cart = this.getCartItems();
    const index = cart.findIndex((item: { id: number }) => item.id === productId);

    if (index > -1) {
      cart[index].quantity += curProdQuantity;
    } else {
      cart.push({ id: productId, quantity: curProdQuantity });
    }

    localStorage.setItem('mymosscart', JSON.stringify(cart));
    this.mymosscart.next(cart); 
    alert("Product added to cart successfully.");
  }

  getCartItems() {
    return JSON.parse(localStorage.getItem('mymosscart') || '[]');
  }

  removeFromCart(productId: number) {
    let cart = this.getCartItems();
    cart = cart.filter((item: { id: number }) => item.id !== productId);
    localStorage.setItem('mymosscart', JSON.stringify(cart));
    this.mymosscart.next(cart);
  }
}

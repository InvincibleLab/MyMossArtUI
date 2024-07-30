import { Component } from '@angular/core';
import { ProductDetailsService } from '../../pages/product-details/product-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.css'
})
export class MyCartComponent {

  cartItems: any[] = [];
  products: any[] = [];

  constructor(private productDetailsService: ProductDetailsService, private router: Router) {}

  ngOnInit(): void {
    this.productDetailsService.mymosscart$.subscribe(cart => {
      this.cartItems = cart;
      this.loadCartProducts();
    });
  }


  loadCartProducts() {
    this.products = [];
    this.cartItems.forEach(item => {
      this.productDetailsService.getProductById(item.id).subscribe(product => {
        this.products.push({ ...product, quantity: item.quantity });
      });
    });
  }

  removeFromCart(productId: number) {
    this.productDetailsService.removeFromCart(productId);
  }

  getTotalAmount() {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  proceedToBuy() {
    const subtotal = this.getTotalAmount();
    this.router.navigate(['/payment'], { queryParams: { subtotal } });
  }

}

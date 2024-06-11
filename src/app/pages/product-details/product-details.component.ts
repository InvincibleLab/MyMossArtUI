import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  product: any; // Replace 'any' with your product model

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the product ID from the route parameters
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.fetchProductDetails(this.productId);
  }

  fetchProductDetails(id: string): void {
    // Replace this mock data with a real API call to fetch product details
    this.product = {
      id: id,
      name: 'Sample Product',
      description: 'This is a sample product.',
      price: 99.99,
      imageUrl: 'assets/img/product-placeholder.png' // Replace with real image URL
    };
  }
}

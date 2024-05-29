import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [
    { name: 'Product 1', description: 'Description 1', price: 19.99, image: 'path/to/image1.jpg' },
    { name: 'Product 2', description: 'Description 2', price: 29.99, image: 'path/to/image2.jpg' },
    // Add more products as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

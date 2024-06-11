import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  carousels = [
    { name: 'Carousel 1', description: 'Description 1', image: 'assets/img/home/carousel/carousel-1.jpg' , bgColor:"rgb(244 244 246)"},
    { name: 'Carousel 2', description: 'Description 2', image: 'assets/img/home/carousel/carousel-2.jpg' , bgColor:"rgb(208 202 203)"},
    { name: 'Carousel 3', description: 'Description 3', image: 'assets/img/home/carousel/carousel-3.jpg' , bgColor:"rgb(236 232 224)"},
    { name: 'Carousel 4', description: 'Description 4', image: 'assets/img/home/carousel/carousel-4.jpg' , bgColor:"rgb(214 211 208)"}
  ];

  trends = [{ name: 'Product 1', description: 'Description 1', price: 19.99, image: 'assets/img/product/p1/trend.jpg', rank: 1 },
  { name: 'Product 2', description: 'Description 2', price: 29.99, image: 'assets/img/product/p2/trend.jpg', rank: 2 },
  { name: 'Product 3', description: 'Description 3', price: 15.99, image: 'assets/img/product/p3/trend.jpg', rank: 3 },
  { name: 'Product 4', description: 'Description 3', price: 15.99, image: 'assets/img/product/p4/trend.jpg', rank: 4 },
  { name: 'Product 5', description: 'Description 3', price: 15.99, image: 'assets/img/product/p5/trend.jpg', rank: 5 },
  { name: 'Product 6', description: 'Description 3', price: 15.99, image: 'assets/img/product/p6/trend.jpg', rank: 6 }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

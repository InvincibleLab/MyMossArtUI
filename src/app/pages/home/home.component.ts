import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  carousels = [
    { name: 'Live Art for Your Living Space', description: 'Enhance your living environment with our living moss art, bringing a dynamic and lush touch of nature to your walls. #MossMagic', image: 'assets/img/home/carousel/carousel-1.jpg' , bgColor:"rgb(244 244 246)"},
    
    { name: 'Transform Your Walls with Moss Masterpieces', description: 'Elevate your decor with our stunning moss masterpieces, perfect for adding a natural and artistic flair to any room.', image: 'assets/img/home/carousel/carousel-2.jpg' , bgColor:"rgb(208 202 203)"},
    
    { name: 'Sustainable Beauty, One Moss at a Time', description: 'Discover the sustainable beauty of moss art, handcrafted with care to create stunning pieces that are as eco-friendly as they are beautiful.', image: 'assets/img/home/carousel/carousel-3.jpg' , bgColor:"rgb(236 232 224)"},
    
    { name: 'Green Artistry, Naturally Yours', description: 'Embrace the charm of nature with our bespoke moss art, crafted to infuse your home with the vibrant essence of greenery.', image: 'assets/img/home/carousel/carousel-4.jpg' , bgColor:"rgb(214 211 208)"}
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

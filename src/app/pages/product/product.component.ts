import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [
    { name: 'Panno Wood Slices', category : 'Moss Wall Art', description: 'Description 1', actualprice: 59.99 ,price: 49.99, image: 'assets/img/product/p1/trend.jpg', stock: 4 },
    { name: 'Bee Art Deco', category : 'Moss Sculptures',description: 'Description 2', actualprice: 45.99, price: 40.99, image: 'assets/img/product/p2/trend.jpg', stock: 10 },
    { name: 'Ferm Moss', category : 'Moss Wall Art',description: 'Description 3', actualprice: 80.99, price: 65.99, image: 'assets/img/product/p3/trend.jpg', stock: 8 },
    { name: 'Ferm Moss', category : 'Moss Wall Art',description: 'Description 3', actualprice: 40.99, price: 35.99, image: 'assets/img/product/p4/trend.jpg', stock: 8 },
    { name: 'Ferm Moss', category : 'Moss Wall Art',description: 'Description 3', actualprice: 80.99, price: 65.99, image: 'assets/img/product/p5/trend.jpg', stock: 8 },
    { name: 'Ferm Moss', category : 'Moss Wall Art',description: 'Description 3', actualprice: 100.99, price: 95.99, image: 'assets/img/product/p6/trend.jpg', stock: 8 },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

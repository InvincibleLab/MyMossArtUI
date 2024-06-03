import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [
    { name: 'Product 1', description: 'Description 1', price: 19.99, image: 'assets/img/product/raw1.jpg' },
    { name: 'Product 2', description: 'Description 2', price: 29.99, image: 'assets/img/product/raw2.jpg' },
    { name: 'Product 3', description: 'Description 3', price: 39.99, image: 'assets/img/product/raw3.jpg' },
    { name: 'Product 4', description: 'Description 4', price: 49.99, image: 'https://artdesigna.com/cdn/shop/files/il_1588xN.4895395148_m8of.jpg?v=1707390902&width=1080' },
    { name: 'Product 5', description: 'Description 5', price: 59.99, image: 'https://www.thespruce.com/thmb/6nEWAh2KzMGPUmnd5sGCAisO2MM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/diy-moss-art-6753219-01-feb81121729f42568f4ea0c4376b4d3f.jpg' },
    { name: 'Product 6', description: 'Description 6', price: 59.99, image: 'https://i.etsystatic.com/23378118/r/il/be28f6/5019453544/il_fullxfull.5019453544_bp1z.jpg' },
    // Add more products as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

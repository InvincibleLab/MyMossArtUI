import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProductData();
  }

  fetchProductData(): void {
    this.http.get<any[]>('assets/stub/product-data.json').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching product data:', error);
      }
    );
  }
}

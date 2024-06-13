import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit{
  
  trends: any[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProductData();
  }

  fetchProductData(): void {
    this.http.get<any[]>('assets/stub/product-data.json').subscribe(
      (data) => {
        this.trends = data.slice(0,-2);
      },
      (error) => {
        console.error('Error fetching product data:', error);
      }
    );
  }

}

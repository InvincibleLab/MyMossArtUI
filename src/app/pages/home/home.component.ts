import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  carousels: any[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCarouselData();
  }
  
  fetchCarouselData(): void {
    this.http.get<any[]>('assets/stub/carousel-data.json').subscribe(
      (data) => {
        this.carousels = data;
      },
      (error) => {
        console.error('Error fetching carousel data:', error);
      }
    );
  }

}

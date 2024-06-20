import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  curProdPicPath = '';


  constructor(
    private route: ActivatedRoute,
    private productDetailsService: ProductDetailsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productDetailsService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.curProdPicPath = data.image;
    });
  }

  changeImage(newPath: string): void {
    this.curProdPicPath = newPath;
  }

  objectKeys = Object.keys;
}

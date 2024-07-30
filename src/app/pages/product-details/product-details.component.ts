import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from './product-details.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        overflow: 'visible'
      })),
      transition('collapsed => expanded', [
        animate('0.3s ease-out')
      ]),
      transition('expanded => collapsed', [
        animate('0.3s ease-in')
      ])
    ])
  ]
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  curProdPicPath = '';
  curProdQuantity = 1;
  expanded = false;

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

  increaseQuantity() {
    if(this.curProdQuantity < 8){
    this.curProdQuantity++;
    }
  }

  decreaseQuantity() {
    if (this.curProdQuantity > 1) {
      this.curProdQuantity--;
    }
  }

  addToCart() {
    this.productDetailsService.addToCart(this.product.productId, this.curProdQuantity);
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}

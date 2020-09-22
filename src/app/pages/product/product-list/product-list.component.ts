import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models.ts/productClass';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  productSubscription: Subscription;

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productSubscription = this.productService.productsSubject.subscribe(
      (products: []) => this.products = products);
    this.productService.emitProductsSubject();
  }

}

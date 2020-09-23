import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models.ts/productClass';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit , OnDestroy{

  products: Product[] = [];
  productSubscription: Subscription;

  constructor( private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productSubscription = this.productService.productsSubject.subscribe(
      (products: []) => this.products = products);
    this.productService.emitProductsSubject();
  }

  goToDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

}

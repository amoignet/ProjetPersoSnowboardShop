import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models.ts/productClass';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = null;
  public id: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): any {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.displayOneProduct(this.id);
  }

  displayOneProduct(id: string): void {
    this.productService.getOneProduct(id)
      .subscribe(data => {
        return this.product = data;
      },
      error => {
        console.log(error);
      });
  }

}

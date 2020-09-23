import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models.ts/productClass';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetails: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): any {
    // tslint:disable-next-line: no-string-literal
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.productDetails = this.productService.getOneProduct(id);
    }
  }

}

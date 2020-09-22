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

  @Input() productId: number;
  @Input() productBrand: string;
  @Input() productModel: string;
  @Input() productSize: number;
  @Input() productImage: string;
  @Input() productDescription: string;
  @Input() productPrice: number;

  product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): any {
  //   this.product = new Product();
  //   id = this.route.snapshot.params['id'];
  //   this.productService.getOneProduct(id).then(
  //     (product: Product) => {
  //       this.product = product;
  //     }
  //   );
  }

}

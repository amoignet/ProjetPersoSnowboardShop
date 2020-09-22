import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models.ts/productClass';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productBrand: string;
  @Input() productModel: string;
  @Input() productSize: number;
  @Input() productImage: string;
  @Input() productDescription: string;
  @Input() productPrice: number;

  constructor() { }

  ngOnInit(): void {
  }

}

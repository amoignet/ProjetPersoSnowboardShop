import { Product } from './../../../models.ts/productClass';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.scss']
})
export class CreateNewProductComponent implements OnInit {

  addProduct: FormGroup;
  newProduct: Product = new Product();

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addProduct = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      size: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onAddProduct(): void {
    this.newProduct._id = null;
    this.newProduct.brand = this.addProduct.get('brand').value;
    this.newProduct.model = this.addProduct.get('model').value;
    this.newProduct.size = this.addProduct.get('size').value;
    this.newProduct.image = this.addProduct.get('image').value;
    this.newProduct.description = this.addProduct.get('description').value;
    this.newProduct.price = this.addProduct.get('price').value;

    this.productService.addNewProduct(this.newProduct)
      .subscribe(
        (result: Product) => { console.log(result); },
        (error: any) => { console.log(error); },
        () => {});
    this.router.navigate(['/product']);
  }

}

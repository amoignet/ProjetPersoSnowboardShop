import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateNewProductComponent } from './pages/admin/create-new-product/create-new-product.component';
import { ProductViewComponent } from './pages/admin/product-view/product-view.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductItemComponent } from './pages/product/product-item/product-item.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { CartComponent } from './pages/product/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateNewProductComponent,
    ProductViewComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SignInComponent,
    SignUpComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Product } from '../models.ts/productClass';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 0,
      brand: 'Nitro',
      model:  'Team',
      size: 157,
      image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
      description: 'Une super planche à tout faire',
      price: 599,
    },
    {
      id: 0,
      brand: 'Nitro',
      model:  'Team',
      size: 157,
      image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
      description: 'Une super planche à tout faire',
      price: 599,
    },
    {
      id: 0,
      brand: 'Nitro',
      model:  'Team',
      size: 157,
      image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
      description: 'Une super planche à tout faire',
      price: 599,
    },
    {
      id: 0,
      brand: 'Nitro',
      model:  'Team',
      size: 157,
      image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
      description: 'Une super planche à tout faire',
      price: 599,
    },
    {
      id: 0,
      brand: 'Nitro',
      model:  'Team',
      size: 157,
      image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
      description: 'Une super planche à tout faire',
      price: 599,
    },
    {
      id: 0,
      brand: 'Nitro',
      model:  'Team',
      size: 157,
      image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
      description: 'Une super planche à tout faire',
      price: 599,
    },
    {
      id: 0,
      brand: 'Nitro',
      model:  'Team',
      size: 157,
      image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
      description: 'Une super planche à tout faire',
      price: 599,
    },
  ];

  productsSubject = new Subject<Product[]>();

  constructor() { }

  emitProductsSubject(): void {
    this.productsSubject.next(this.products);
  }
}

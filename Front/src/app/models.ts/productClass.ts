export class Product {
  id: number;
  brand: string;
  model: string;
  size: number;
  image: string;
  description: string;
  price: number;

  constructor( id, brand, model, size, image, description, price ) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.size = size;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}

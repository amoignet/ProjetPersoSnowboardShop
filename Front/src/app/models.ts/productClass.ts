export class Product {
  // tslint:disable-next-line: variable-name
  _id: string;
  brand: string;
  model: string;
  size: number;
  image: string;
  description: string;
  price: number;

  constructor(input?: Product) {
    if (input != null) {
      Object.assign(this, input);
    }
  }
}

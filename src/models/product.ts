import { ProductInterface } from './../interfaces/product';

export class ProductModel implements ProductInterface {
  description: string;
  constructor(description: string) {
    this.description = description;
  }
}

import * as express from 'express';
import { ProductInterface } from './../interfaces/product';
import { ProductModel } from './../models/product';

export class ProductController {
  constructor() {}

  public getAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): void {
    const a: ProductInterface = new ProductModel('ok');
    const arrayProducts: ProductInterface[] = [];
    arrayProducts.push(a);
    res.json(arrayProducts);
  }
}

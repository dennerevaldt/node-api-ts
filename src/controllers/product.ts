import { Request, Response, NextFunction } from 'express';
import { ProductInterface } from './../interfaces/product';
import { ProductModel } from './../models/product';

export class ProductController {
  constructor() {}

  public getAll(req: Request, res: Response, next: NextFunction): void {
    const a: ProductInterface = new ProductModel('Caixa de som JBL');
    const arrayProducts: ProductInterface[] = [];
    arrayProducts.push(a);
    res.json(arrayProducts);
  }
}

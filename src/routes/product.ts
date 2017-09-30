import * as express from 'express';
import { ProductController } from '../controllers/product';

class ProductRoutes {
  public express: express.Application;
  public router: express.Router;
  public productControler: ProductController;

  constructor() {
    this.express = express();
    this.router = express.Router();
    this.productControler = new ProductController();
    this.middlewares();
    this.initRoutes();
  }

  private middlewares(): void {}

  private initRoutes(): void {
    this.router.get('/', this.productControler.getAll);
  }
}

export default new ProductRoutes().router;

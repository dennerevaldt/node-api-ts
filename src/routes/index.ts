import * as express from 'express';
import product from './../routes/product';

class Routes {
  public express: express.Application;
  public router: express.Router;

  constructor() {
    this.express = express();
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.use('/product', product);
  }
}

export default new Routes().router;

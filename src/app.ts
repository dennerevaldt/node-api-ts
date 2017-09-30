import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import * as cors from 'cors';
import * as helmet from 'helmet';
import routes from './routes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
  }

  private middlewares(): void {
    // body parser config
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    // method override config
    this.express.use(methodOverride('X-HTTP-Method'));
    this.express.use(methodOverride('X-HTTP-Method-Override'));
    this.express.use(methodOverride('X-Method-Override'));
    this.express.use(methodOverride('_method'));
    // cors config
    this.express.use(
      cors({
        origin: ['*'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-type', 'x-access-token'],
      }),
    );
    // helmet config
    this.express.use(helmet());
    // routes config
    this.express.use(routes);
    // not found handler
    this.express.use(this.notFoundHandler);
    // all error hanlder
    this.express.use(this.errorHandler);
  }

  private notFoundHandler(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ): void {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  }

  private errorHandler(
    err: Error,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ): void {
    response
      .status(err.status || 500)
      .json({ error: err.errors || err.message });
  }
}

export default new App().express;

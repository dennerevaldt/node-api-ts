"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var cors = require("cors");
var helmet = require("helmet");
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middlewares();
    }
    App.prototype.middlewares = function () {
        // body parser config
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        // method override config
        this.express.use(methodOverride('X-HTTP-Method'));
        this.express.use(methodOverride('X-HTTP-Method-Override'));
        this.express.use(methodOverride('X-Method-Override'));
        this.express.use(methodOverride('_method'));
        // cors config
        this.express.use(cors({
            origin: ['*'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-type', 'x-access-token'],
        }));
        // helmet config
        this.express.use(helmet());
        // routes config
        this.express.use(routes_1.default);
        // not found handler
        this.express.use(this.notFoundHandler);
        // all error hanlder
        this.express.use(this.errorHandler);
    };
    App.prototype.notFoundHandler = function (request, response, next) {
        var err = new Error('Not found');
        err.status = 404;
        next(err);
    };
    App.prototype.errorHandler = function (err, request, response, next) {
        response
            .status(err.status || 500)
            .json({ error: err.errors || err.message });
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map
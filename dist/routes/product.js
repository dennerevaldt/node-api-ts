"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var product_1 = require("../controllers/product");
var ProductRoutes = /** @class */ (function () {
    function ProductRoutes() {
        this.express = express();
        this.router = express.Router();
        this.productControler = new product_1.ProductController();
        this.middlewares();
        this.initRoutes();
    }
    ProductRoutes.prototype.middlewares = function () { };
    ProductRoutes.prototype.initRoutes = function () {
        this.router.get('/', this.productControler.getAll);
    };
    return ProductRoutes;
}());
exports.default = new ProductRoutes().router;
//# sourceMappingURL=product.js.map
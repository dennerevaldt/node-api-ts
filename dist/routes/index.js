"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var product_1 = require("./../routes/product");
var Routes = /** @class */ (function () {
    function Routes() {
        this.express = express();
        this.router = express.Router();
        this.routes();
    }
    Routes.prototype.routes = function () {
        this.router.use('/product', product_1.default);
    };
    return Routes;
}());
exports.default = new Routes().router;
//# sourceMappingURL=index.js.map
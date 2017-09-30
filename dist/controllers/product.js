"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./../models/product");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.prototype.getAll = function (req, res, next) {
        var a = new product_1.ProductModel('ok');
        var arrayProducts = [];
        arrayProducts.push(a);
        res.json(arrayProducts);
    };
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=product.js.map
const ProductController = require('../controllers/product.controllers');

module.exports = (app) => {
    app.post("/api/products", ProductController.createProduct);
}
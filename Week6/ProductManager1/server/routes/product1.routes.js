const ProductController = require('../controllers/Product1.controllers');

module.exports = (app) => {
    app.post("/api/products", ProductController.createProduct);
}
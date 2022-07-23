const ProductController = require('../controllers/products.controllers');

module.exports = (app) => {
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getProductById);
}
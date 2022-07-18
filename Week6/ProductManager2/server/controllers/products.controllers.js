const Product = require('../models/product.models');

module.exports = {
    createProduct: (req, res) => {
        Product.create(req, body)
        .then((newProduct) => res.status(201).json(newProduct))
        .catch((err) => {console.log('ERROR! Cannot create product', err);
        res.status(400).json({message: 'Something Went Wrong', error: err});
        });
    }
};
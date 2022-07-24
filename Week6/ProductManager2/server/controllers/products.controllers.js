const Product = require('../models/product.models');

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => res.status(201).json(newProduct))
        .catch((err) => {console.log('ERROR! Cannot create product', err);
        res.status(400).json({message: 'Something Went Wrong', error: err});
        });
    },
    getAllProducts: (req, res) => {
        Product.find()
        .then((allProducts) => res.status(201).json(allProducts))
        .catch((err) => {console.log('ERROR! Failed to find all Products', err)
        res.status(400).json({message: 'Something Went Wrong', error: err});
    });
    },
    getProductById: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct) => {res.status(201).json(oneProduct)})
        .catch((err) => {console.log('ERROR! Failed to find Product by ID!', err)
        res.status(400).json({message: 'Something Went Wrong', error: err});
    });
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then((confirm) => {res.status(201).json(confirm)})
        .catch((err) => {console.log('ERROR! Failed to delete', err)
        res.status(400).json({message: 'Something Went Wrong', error: err});
    });
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((product) => {res.status(201).json(product)})
        .catch((err) => {console.log('ERROR! Failed to update', err)
        res.status(400).json({message: 'Something Went Wrong', error: err});
    });
    }
};
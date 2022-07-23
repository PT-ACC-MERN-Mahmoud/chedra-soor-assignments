const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    { //id is auto created
        title: {
            type: String,
            required: [true, 'Title is required'],
            minlength: [3, 'Title must be 3 characters long']
        },
        price: {
            type: Number,
            required: [true, 'Price is required']
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            minlength: [3, 'Description must be 3 characters long']
        }
    },
    {timestamps: true}
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
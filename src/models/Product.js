const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name : String,
    description : String,
    price : String,
    currency : String,
    category : {
        type : String,
        trim : true,
        required : true,
        lowercase : true
    },
    image_url : String
});
const ProductModel = mongoose.model('products',ProductSchema);

module.exports = {ProductModel};
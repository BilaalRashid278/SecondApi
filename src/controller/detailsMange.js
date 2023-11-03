const { ProductModel } = require('../models/Product.js');
const AuthModel = require('../models/Auth.js');

let page = 5
const limit = 5;
const skip = (page -1) * limit;
console.log(skip);

const getAllDetails = async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10
    const skip = (page -1) * limit
    try {
        const products = await ProductModel.find().skip(skip).limit(limit);
        res.send({
            success: true,
            message: "All Products is here",
            products,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Product not found",
        })
    }
};
const getOneProduct = async (req, res) => {
    try {
        const product = await ProductModel.find({_id : req.params.id});
        res.send({
            success: true,
            message: "Products is here",
            product
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Product not found",
        })
    }
};
const getCategoriedDetails = async (req, res) => {
    const category = req.query.category
    const page = req.query.page || 1;
    const limit = req.query.limit || 10
    const skip = (page -1) * limit
    const products = await ProductModel.find({ category: category }).skip(skip).limit(limit);
    res.send({
        success: true,
        message: "All Categoried Products is here",
        products
    });
};

const createProduct = async (req, res) => {
    try {
        const createProduct = new ProductModel(req.body);
        const Product = await ProductModel.insertMany([createProduct]);
        res.status(201).send({
            success: true,
            message: 'Product created successfully',
            Product
        });
    } catch (error) {
        res.status(404).send(error);
    }

};

const UpdateOneProduct = async (req, res) => {
    try {
        await ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body);
        const UpdatedProduct = await ProductModel.findOne({ _id: req.params.id });
        res.send({
            success: true,
            message: "Sccessfull Updated",
            UpdatedProduct
        });
    } catch (error) {
        res.send(error);
    }
};
const UpdateProduct = async (req, res) => {
    try {
        await ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body);
        const UpdatedProduct = await ProductModel.findOne({ _id: req.params.id });
        res.send({
            success: true,
            message: "Sccessfull Updated",
            UpdatedProduct
        });
    } catch (error) {
        res.send(error);
    }
};
const DeleteProduct = async (req, res) => {
    try {
        await ProductModel.findOneAndDelete({ _id: req.params.id });
        res.send({
            success: true,
            message: "Sccessfull Deleted",
        });
    } catch (error) {
        res.send(error);
    }
};
const SignUpUser = async (req,res) => {
    try {
        const UserAuth = await AuthModel.insertMany([req.body]);
        res.send({
            success: true,
            message : 'Your account has been created successfully',
            UserAuth
        })
    } catch (error) {
        res.send({
            success: false,
            message : 'account not created',
            error
        })
    }
}



module.exports = { getAllDetails, createProduct, UpdateOneProduct, UpdateProduct, DeleteProduct, getCategoriedDetails, getOneProduct, SignUpUser };
import ProductModel from "../models/ProductModel.js"
import AsyncHandler from "express-async-handler";

export const getProducts = AsyncHandler(async (req, res) => {
    const products = await ProductModel.find({});
    res.send({
        products
    });
})

export const getProductById = AsyncHandler(async (req, res) => {

    const id = req.params.id
    const product = await ProductModel.findById(id);

    if (!product) {
        return res.status(404).send()
    }
    res.send({
        product
    })
})
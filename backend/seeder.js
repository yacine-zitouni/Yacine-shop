import dotenv from "dotenv"
import db from "./db.js"
import Product from "./models/ProductModel.js"
import products from "./products.js"
dotenv.config()
db();

const pushData = async () => {
    await Product.deleteMany({})
    const adminId = "60803c3d0703ff0004d1bb38"
    const t = await Product.insertMany(products.map(product => ({ ...product, user: adminId })))

}

pushData();
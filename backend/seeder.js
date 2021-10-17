import dotenv from "dotenv"
import db from "./db.js"
import Product from "./models/ProductModel.js"
import products from "./data/products.js"
import User from "./models/UserModel.js"
import users from "./data/users.js"

dotenv.config()
db();

const pushData = async () => {
    await User.deleteMany({});

    await Product.deleteMany({})
    const data = await User.insertMany(users);
    const adminId = data[0]._id;
    await Product.insertMany(products.map(product => ({ ...product, user: adminId })))

}

pushData();
import express from "express"
import dotenv from "dotenv"
import productRouter from "./routers/productRouter.js"
import db from "./db.js"

dotenv.config()
const app = express()
db();
app.use(express.json());

app.use("/api/products", productRouter);

app.get("/api", (req, res) => {
    res.send('Welcome to electroShop APi')
})




const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("bismi Allah express is Runnig")
})
import express from "express";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import db from "./db.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();
const app = express();
db();
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/api", (req, res) => {
  res.send("Welcome to Yacine Shop APi");
});

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use("/api/users", userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("bismi Allah express is Runnig");
});

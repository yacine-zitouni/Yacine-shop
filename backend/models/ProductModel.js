import Mongoose from "mongoose";
const reviewsSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: { type: String, required: true, default: '' },
    rating: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const productSchema = Mongoose.Schema({
    user: {
        type: Mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
    },
    reviews: [reviewsSchema],
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },

    rating: {
        type: Number,
        required: true,
        default: 0
    },

}, { timestamps: true })


const Product = Mongoose.model("Product", productSchema);

export default Product;
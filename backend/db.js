import Mongoose from "mongoose";
const db = async () => {
    try {
        const connection = await Mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongodb connected, ", connection.connection.host);
    } catch (error) {
        console.log("erreur, ", error);
    }
};

export default db;
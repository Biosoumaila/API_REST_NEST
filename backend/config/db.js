const mongoose = require('mongoose');
MONGO_URI = "mongodb+srv://ismailbahngobi:api-rest-node-js@api-rest-node-js.bq4rs.mongodb.net/ap"

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        // mongoose.connect(process.env.MONGO_URI, () => console.log("MONGO connected"));
        mongoose.connect(MONGO_URI);
        console.log('Mongo connected');
        // } catch (err) {
    } catch {

        // console.log(err);
        // process.exit();
        console.log("impossible de connecter a la base de donne");
    }
};

module.exports = connectDB;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongo = connectToMongo;
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
async function connectToMongo() {
    const MONGODB_URI = process.env.MONGODB_URI;
    try {
        await mongoose.connect(MONGODB_URI).then(() => {
            console.log("SUCCESFULLY CONNECTED TO MONGO");
        });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

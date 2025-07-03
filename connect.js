const mongoose = require("mongoose");
const { connectMongoDB } = require("../REST_API/connection");

async function ConnectMongoDB(url){
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDB
}
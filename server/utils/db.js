const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const uri = process.env.MONGO_URI;

const connectDB = async() => {
    try {
        await mongoose.connect(uri)
        console.log("Connection to Database Successfull")
    } catch (error) {
        console.log(error)
        process.exit(0);
    }
}



module.exports = connectDB;
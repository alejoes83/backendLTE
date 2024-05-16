const mongoose = require("mongoose");
require("dotenv").config({path:".env"});

const conectarBD = () =>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then (() =>console.log("estamos conectados con mongoDB"))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;
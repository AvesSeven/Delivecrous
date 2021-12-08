const mongoose = require("mongoose");

module.exports = new mongoose.Schema({  
    name: String,
    dishes: [require("./dish.schema")],
});
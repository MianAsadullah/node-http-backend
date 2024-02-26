const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishesSchema = new Schema({
name:{
    type:String,
    required:true,
    unique:true,
},
description:{
    type:String,
    required:true
},
},{
    timestamps:true
})

const Dishes=mongoose.model("Dish", dishesSchema)

module.exports= Dishes
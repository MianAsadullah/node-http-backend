const mongoose = require("mongoose");
const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion";
const connect = mongoose.connect(url)

connect.then((db)=>{

    console.log("Connected Correctly to Server");

    const newDish = Dishes({
        name:"Asadullah",
        description:"test"
    })

    newDish.save().then((dish)=>{
        console.log(dish);
        return Dishes.find({}).exec();
    }).then(()=>{
       return mongoose.disconnect()
    }).catch((err)=>{
        console.log("error", err);
    })
})
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopy")
.then(() => {
    console.log("db connected");
})
.catch(() => {
    console.log('failed');
})


const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        
    }
})
const mongoose = require("mongoose")

const user = new mongoose.Schema({
    nom : {type:String,required:true},
    prenom : {type:String,required:true},
    date_nais : {type:String,required:true},
    telephone : {type:Number,required:true},
    email : {type:String,required:true},
    password : {type:String, required:true},
    image : {type:String, required:true }

})

const users = mongoose.model("users",user);
module.exports = users;

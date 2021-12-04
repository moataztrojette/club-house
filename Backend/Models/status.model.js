const mongoose  = require("mongoose");

const  statu = new mongoose.Schema({
    publication : {type:String,required:true},
    image : {type:String},
    date : {type:String, required:true},
    nom_user: {type:String, required:true},
    datePub: {type:Date, required:true},
    id_user:{type:mongoose.Types.ObjectId , ref:"users"}
})
const status = mongoose.model("status",statu);
module.exports = status
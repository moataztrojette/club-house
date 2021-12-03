const mongoose = require("mongoose")

const room = new mongoose.Schema({
    nom_salle : {type:String,required:true},
    date_debut : {type:String,required:true},
    date_fin : {type:String,required:true},
    etat_salle : {type:String, required:true},
    link : {type:String, required:true},
    date : {type:String, required:true},
    id_user:{type:mongoose.Types.ObjectId , ref:"users"}
})

const rooms = mongoose.model("rooms",room);
module.exports = rooms;

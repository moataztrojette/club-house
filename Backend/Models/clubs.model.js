const mongoose  = require("mongoose");

const  club = new mongoose.Schema({
    nom_club : {type:String,required:true},
    contexte_club:{type:String,required:true},
    date_debut_reunion :{type:String,required:true},
    date_fin_reunion:{type:String,required:true},
    date : {type:String, required:true},
    id_user:{type:mongoose.Types.ObjectId , ref:"users"},
})
const clubs = mongoose.model("clubs",club);
module.exports = clubs
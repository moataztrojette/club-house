const mongoose  = require("mongoose");

const  clubUser = new mongoose.Schema({
    id_user : {type:mongoose.Types.ObjectId , ref:"users"},
    id_club:{type:mongoose.Types.ObjectId , ref:"clubs"},
})
const clubUsers = mongoose.model("clubUsers",clubUser);
module.exports = clubUsers
const mongoose  = require("mongoose");

const  userFollow = new mongoose.Schema({
    id_user : {type:mongoose.Types.ObjectId , ref:"users"},
    id_user_follow:{type:mongoose.Types.ObjectId , ref:"users"},
})
const userFollows = mongoose.model("userFollows",userFollow);
module.exports = userFollows
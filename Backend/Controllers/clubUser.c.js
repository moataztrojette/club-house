const clubUsers = require("../Models/clubUser.model");

module.exports.Add = async(req,res)=>{
  const verife = await clubUsers.findOne({
    id_user : req.info_user._id,
    id_club:req.body.id_club
  })
  if(verife){
    return res.status(422).send("Already subscribe !");
  }
  else{
    const clubUser = new clubUsers({
        id_user : req.info_user._id,
        id_club : req.body.id_club,
                });
      await clubUser.save();
      res.status(200).send(clubUser);   
  } } 

  module.exports.findMyClubFollow = async (req, res) => {
    const clubsUser= await clubUsers.find({id_user:req.info_user._id}).populate('id_user').populate('id_club')
    res.json(clubsUser);
  };

  module.exports.unfollow = async(req,res)=>{
    await clubUsers.findByIdAndDelete({_id:req.params.id});
      res.status(200).send("deleted");   
  } 



  

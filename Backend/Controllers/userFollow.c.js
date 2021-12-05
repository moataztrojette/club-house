const userFollows = require("../Models/userFollow.model");
const jwt = require("jsonwebtoken")

module.exports.Add = async(req,res)=>{
    const verife = await userFollows.findOne({
      id_user : req.info_user._id,
      id_user_follow:req.body.id_user_follow
    })
    if(verife){
      return res.status(422).send("Already Follow !");
    }
    else{
      const userFollow = new userFollows({
        id_user : req.info_user._id,
        id_user_follow:req.body.id_user_follow
                  });
        await userFollow.save();
        res.status(200).send(userFollow);   
    } } 

    module.exports.apiVerife = async (req,res,next)=>{
      const token = req.session.token
      jwt.verify(token,process.env.SECURITE,(error,decoded)=>{
        if(error){
          return res.status(403).send('invalid token')
        }
        req.info_user = decoded
      })
      res.send(req.info_user);
    
    }

    module.exports.findMyUsersFollow = async (req, res) => {
      const UserFollow = await userFollows.find({id_user:req.info_user._id}).populate('id_user').populate('id_user_follow')
      res.json(UserFollow);
    };

    module.exports.unfollow = async(req,res)=>{
      await userFollows.findByIdAndDelete({_id:req.params.id});
        res.status(200).send("deleted");   
    } 

    

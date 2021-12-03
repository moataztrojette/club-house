const users = require("../Models/user.model");
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const images = require("../models/image.model");
const rooms = require("../Models/room.model");
const clubs = require("../Models/clubs.model");
const clubUsers = require("../Models/clubUser.model");


module.exports.inscription = async(req,res)=>{

    const verife = await users.findOne({email:req.body.email});
    if(verife){
        return res.status(404).send("Email alerady exist")
    }
    if(!verife){
        const newPassword = await bcrypt.hash(req.body.password,13);    
        const nm = req.files.image.name;
        const user = new users({
            nom : req.body.nom,
            prenom : req.body.prenom,
            email : req.body.email,
            password : newPassword,
            date_nais:req.body.date_nais,
            telephone:req.body.telephone,
            image:nm
        });
        await user.save();
        const newImage = new images({
            ref: user._id,
            name: nm,
            body: req.files.image.data,
            type: req.files.image.mimetype,
          });
          await newImage.save();
        res.status(200).send(user);   
    } 
}
module.exports.getImage = async (req, res) => {
    const id = req.params.idImage;
    const resImage = await images.findOne({ ref: id });
    res.setHeader("Content-Type", resImage.type);
    res.send(resImage.body);
  };

module.exports.login = async(req,res)=>{
    const user = await users.findOne({email : req.body.email});

    if(!user){
        return res.status(404).send("Invalid Email or Password")
      }
      let passwordIsValid = await bcrypt.compare(req.body.password,user.password);

    if(user && passwordIsValid){
        const token = jwt.sign({
            _id: user._id,
            nom : user.nom,
            prenom : user.prenom,
            email : user.email,
            telephone:user.telephone,
            date_nais :user.date_nais
        },process.env.SECURITE,{
            expiresIn : '15d'
          });
          req.session.token  = token
          res.send(user);
    }

    else {
        res.status(403).send("Password or Email Invalid");
    }
        
}

module.exports.findUsers = async(req,res)=>{
    const listUser = await users.find();
    res.json(listUser)
}

module.exports.remove = async (req,res)=>{
    const id = req.params.id;
    await users.findByIdAndRemove({_id : req.params.id})
    await rooms.deleteMany({id_user:id});
    await clubs.deleteMany({id_user:id});
    await clubUsers.deleteMany({id_user:id});

    

    res.status(200).send("deleted")
}

module.exports.serche = async (req, res) => {
    const Serche = await users.find({
      nom: { $regex: req.params.name, $options: "i" },
    });
    res.json(Serche);
  };

  module.exports.infoUser = async (req,res,next)=>{
    const token = req.session.token
    jwt.verify(token,process.env.SECURITE,(error,decoded)=>{
      if(error){
        return res.status(403).send('invalid token')
      }
      const info = decoded
      res.send(info)
    })
}

module.exports.verife = (req,res)=>{
  const token = req.session.token
  jwt.verify(token,process.env.SECURITE,(error,decoded)=>{
    if(error){
      return res.status(403).send('invalid token')
    }
    res.json(decoded)
  })
}

/*
module.exports.verifeAdmin = (req,res)=>{
  const token = req.session.token
  jwt.verify(token,process.env.SECURITE,(error,decoded)=>{
    if(error){
      return res.status(403).send('invalid token')
    }
    else if(decoded.e =="admin" && decoded.p=="admin123"){
      return res.status(200).send("is Admin with token")
    } 
  })
}
*/

module.exports.verifeAdmin = (req,res)=>{
  const token = req.session.token
  jwt.verify(token,process.env.SECURITE,(error,decoded)=>{
    req.info_user = decoded
    if(req.info_user.nom !="admin") {
       return res.status(404).send('invalid token')
    }else{
      res.send("admin with token")
    }

  })
}


module.exports.logout = (req,res)=>{
  req.session = null
  res.send('logout')
}

module.exports.isAdmin = (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    if(email =="admin" && password =="admin123"){
    
      const tokenAdmin = jwt.sign({
        nom: email,
        p : password
    },process.env.SECURITE,{
        expiresIn : '15d'
      });
      req.session.token  = tokenAdmin
      res.status(200).send("is Admin");
    }else{
      return res.status(404).send("Invalid Name or Password")
    }
}

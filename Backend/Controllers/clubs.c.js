const clubs = require("../Models/clubs.model");
const clubUser = require("../Models/clubUser.model");
const jwt = require("jsonwebtoken")

module.exports.Add = async(req,res)=>{
    //let date_ob = new Date();
    //let date = date_ob.getDate();
    //let month = date_ob.getMonth() + 1;
    //let year = date_ob.getFullYear();

    //const dataFull = date+"/"+month+"/"+year
    
    const club = new clubs({
          nom_club : req.body.nom_club,
          contexte_club : req.body.contexte_club,
          date_debut_reunion : req.body.date_debut_reunion,
          date_fin_reunion : req.body.date_fin_reunion,
          date : req.body.date,
          id_user : req.info_user._id
                });
      await club.save();
      const pop = await  clubs.populate(club,{ path : 'id_user'})
      res.status(200).send(pop);   
  }

  module.exports.findall = async (req, res) => {
    const Allclubs= await clubs.find().populate('id_user')
    res.json(Allclubs);
  };

  module.exports.findClubUserCreated = async (req, res) => {
    const id = req.params.id;
    const clubsUser= await clubs.find({id_user:req.info_user._id}).populate('id_user')
    await clubUser.deleteMany({id_club:id});
    res.json(clubsUser);
  };

  module.exports.serche = async (req, res) => {
    const Serche = await clubs.find({
        nom_club: { $regex: req.params.name, $options: "i" },
    }).populate('id_user')
    res.json(Serche);
  };

  module.exports.remove = async (req,res)=>{
    const id = req.params.id;
    await clubs.findByIdAndRemove({_id:req.params.id});
    await clubUser.deleteMany({id_club:id});
    res.status(200).send("deleted")
}

module.exports.deleteClubUser = async(req,res)=>{
  const id = req.params.id;
  await clubs.findByIdAndDelete({_id:req.params.id});
  await clubUser.deleteMany({id_club:id});
  res.status(200).send("deleted");   

}

module.exports.updateClub = async (req,res)=>{

  //const id = req.params.id;
  const resUpdate = await clubs.findOneAndUpdate({_id:req.params.id},{
    contexte_club : req.body.contexte_club,
    date_debut_reunion : req.body.date_debut_reunion,
    date_fin_reunion : req.body.date_fin_reunion,
    date: req.body.date
  },{
      new : true
  })
  //const clubsUpdate = await clubUser.find({id_club:id}).select("id_club").populate("id_club");
 
  res.json(resUpdate);

}


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
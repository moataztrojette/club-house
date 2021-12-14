const status = require("../Models/status.model");
const images = require("../models/image.model");
const userFollows = require("../Models/userFollow.model");
module.exports.add = async(req,res)=>{
  let date_ob = new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours()
  let minutes = date_ob.getMinutes();

  const dataFull = date+"/"+month+"/"+year+" "+hours+":"+minutes

        const nm = req.files.image.name;
        const statu = new status({
            publication : req.body.publication,
            image:nm,
            date : dataFull,
            datePub : date_ob,
            id_user : req.info_user._id,
            nom_user : req.info_user.nom
        });
        await statu.save();
        const newImage = new images({
            ref: statu._id,
            name: nm,
            body: req.files.image.data,
            type: req.files.image.mimetype,
          });
          await newImage.save();
          const pop = await  status.populate(statu,{ path : 'id_user'})
          res.status(200).send(pop);   
}
module.exports.getImage = async (req, res) => {
    const id = req.params.idImage;
    const resImage = await images.findOne({ ref: id });
    res.setHeader("Content-Type", resImage.type);
    res.send(resImage.body);
  };

  module.exports.findallStatus = async (req, res) => {

    const AllStatus= await status.find().populate('id_user').sort({'datePub': -1})
    
    res.json(AllStatus);
    
  };

  module.exports.findall = async (req, res) => {
    //const tab_id = []

    //const AllStatus= await status.find({id_user:req.info_user._id}).populate('id_user').sort({'datePub': -1})
    //const AllStatus= await status.find().populate('id_user').sort({'datePub': -1})
    

    const pubUserFollow = await userFollows.find({id_user:req.info_user._id}).select("id_user_follow -_id");
    const test =  pubUserFollow.map( bb =>{
      return bb.id_user_follow
    })

    test.push(req.info_user._id)
    //console.log(test)
    const AllStatus= await status.find({
      id_user : {
        $in : test
      }
    }).populate('id_user').sort({'datePub': -1})


    res.json(AllStatus);
    
  };
  
  module.exports.findMyStatu = async (req, res) => {
    
    const AllStatus= await status.find({id_user:req.info_user._id}).populate('id_user').sort({'datePub': -1})
    res.json(AllStatus);
    
  };


  module.exports.serche = async (req, res) => {

    const Serche = await status.find({
      nom_user: { $regex: req.params.name, $options: "i" },
    }).populate('id_user')
    res.json(Serche);
  };
  module.exports.remove = async (req,res)=>{
    await status.findByIdAndRemove({_id:req.params.id});
    res.status(200).send("deleted")
}

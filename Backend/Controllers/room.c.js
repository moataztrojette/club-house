const rooms = require("../Models/room.model");


module.exports.Add = async(req,res)=>{
      let date_ob = new Date();
      let date = date_ob.getDate();
      let month = date_ob.getMonth() + 1;
      let year = date_ob.getFullYear();

      const dataFull = date+"/"+month+"/"+year
      
      const room = new rooms({
            nom_salle : req.body.nom_salle,
            date_debut : req.body.date_debut,
            date_fin : req.body.date_fin,
            etat_salle : req.body.etat_salle,
            link : req.body.link,
            date : dataFull,
            id_user : req.info_user._id
                  });
        await room.save();
        const pop = await  rooms.populate(room,{ path : 'id_user'})
        res.status(200).send(pop);   
    } 


module.exports.findall = async (req, res) => {
        const Allrooms= await rooms.find().populate('id_user')
        res.json(Allrooms);
      };

      module.exports.serche = async (req, res) => {
        const Serche = await rooms.find({
            nom_salle: { $regex: req.params.name, $options: "i" },
        }).populate('id_user')
        res.json(Serche);
      };
      module.exports.remove = async (req,res)=>{
        await rooms.findByIdAndRemove({_id:req.params.id});
        res.status(200).send("deleted")
    }
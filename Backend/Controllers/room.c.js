const rooms = require("../Models/room.model");


module.exports.Add = async(req,res)=>{
        const room = new rooms({
            nom_salle : req.body.nom_salle,
            date_debut : req.body.date_debut,
            date_fin : req.body.date_fin,
            etat_salle : req.body.etat_salle,
            link : req.body.link
        });
        await room.save();
        res.status(200).send(room);   
    } 


module.exports.findall = async (req, res) => {
        const Allrooms= await rooms.find()
        res.json(Allrooms);
      };

      module.exports.serche = async (req, res) => {
        const Serche = await rooms.find({
            nom_salle: { $regex: req.params.name, $options: "i" },
        })
        res.json(Serche);
      };
      
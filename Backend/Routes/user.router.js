const  express= require("express");
const {inscription,login,findUsers,remove,serche,getImage,infoUser,verife,isAdmin,verifeAdmin,logout} = require("../Controllers/user.c");
const router = express.Router();
router.post("/inscription",inscription);
router.get('/verif',verife)
router.get('/verifadmin',verifeAdmin)
router.post('/isadmin',isAdmin)
router.post('/logout',logout)
router.post("/login",login);
router.get("/users",findUsers);
router.get("/coordonner",infoUser);
router.delete('/deleteUser/:id',remove)
router.get("/serche/:name", serche);
router.get("/getImage/:idImage", getImage);



module.exports = router;
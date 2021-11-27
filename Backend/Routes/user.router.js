const  express= require("express");
const {inscription,login,findUsers,remove,serche,getImage} = require("../Controllers/user.c");
const router = express.Router();


router.post("/inscription",inscription);
router.post("/login",login);
router.get("/users",findUsers);
router.delete('/deleteUser/:id',remove)
router.get("/serche/:name", serche);
router.get("/getImage/:idImage", getImage);


module.exports = router;
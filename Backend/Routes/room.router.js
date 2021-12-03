const  express= require("express");
const {Add,findall,serche,remove} = require("../Controllers/room.c");
const router = express.Router();
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,Add);
router.get("/findall", findall);
router.get("/serche/:name", serche);
router.delete('/delete/:id',remove)


module.exports = router;
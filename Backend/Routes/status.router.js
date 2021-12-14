const  express= require("express");
const {add,findall,getImage,serche,remove,findallStatus,findMyStatu} = require("../Controllers/status.c");
const router = express.Router();
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,add);
router.get("/findall", isLogin,findall);
router.get("/find", isLogin,findMyStatu);

router.get("/findstatu",findallStatus);

router.get("/getImage/:idImage", getImage);
router.get("/serche/:name", serche);
router.delete('/delete/:id',remove)

module.exports = router;
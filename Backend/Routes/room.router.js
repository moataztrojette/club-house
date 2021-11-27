const  express= require("express");
const {Add,findall,serche} = require("../Controllers/room.c");
const router = express.Router();


router.post("/add",Add);
router.get("/findall", findall);
router.get("/serche/:name", serche);


module.exports = router;
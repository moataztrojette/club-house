const express= require("express");
const router = express.Router();
const {Add,findall,serche,remove,findClubUserCreated,deleteClubUser,updateClub,apiVerife} = require("../Controllers/clubs.c");
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,Add);
router.get("/findall",findall);
router.get("/findclubsuser",isLogin,findClubUserCreated);
router.get("/serche/:name", serche);
router.delete('/delete/:id',remove)
router.delete('/deleteclubuser/:id',deleteClubUser)
router.put('/update/:id',updateClub)
router.get('/apifollow',apiVerife)
module.exports = router;
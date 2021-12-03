const express= require("express");
const router = express.Router();
const {Add,findMyClubFollow,unfollow} = require("../Controllers/clubUser.c");
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,Add);
router.get("/clubFollow",isLogin,findMyClubFollow);
router.delete('/unfollow/:id',unfollow);

module.exports = router;
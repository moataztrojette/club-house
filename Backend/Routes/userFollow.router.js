const express= require("express");
const router = express.Router();
const {Add,apiVerife,findMyUsersFollow,unfollow} = require("../Controllers/userFollow.c");
const { isLogin } = require("../middleware/auth")

router.post("/add",isLogin,Add);
router.get('/apifollow',apiVerife)
router.get("/usersFollows",isLogin,findMyUsersFollow);
router.delete('/unfollow/:id',unfollow);
module.exports = router;
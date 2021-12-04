
const express = require("express");
const app = express();
const cors = require("cors");
const env = require('dotenv')
const cookieSession = require('cookie-session')
const expressfileupload = require("express-fileupload")

const user = require("./Routes/user.router");
const room = require("./Routes/room.router.js");
const clubs = require("./Routes/clubs.router.js");
const clubUsers = require("./Routes/clubUsers.router");
const status = require("./Routes/status.router");
const userFollow = require("./Routes/userFollow.router");





app.use(cors({ origin: "http://localhost:3000",credentials:true }));
app.use(express.json());
env.config()

app.use(cookieSession({
  name : 'CH',
  keys : ['CH_key'],
  //maxAge 
}))
app.use(expressfileupload({
}))




require('./DB/setup')();
app.use('/api/user',user);
app.use('/api/room',room);
app.use('/api/club',clubs)
app.use('/api/clubUser',clubUsers)
app.use('/api/status',status)
app.use('/api/userfollow',userFollow)




app.listen(4000,()=>{
  console.log("Listening on port 4000");
})
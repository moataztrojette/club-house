
const express = require("express");
const app = express();
const cors = require("cors");
const env = require('dotenv')
const cookieSession = require('cookie-session')
const expressfileupload = require("express-fileupload")

const user = require("./Routes/user.router");
const room = require("./Routes/room.router.js");




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


app.listen(4000,()=>{
  console.log("Listening on port 4000");
})
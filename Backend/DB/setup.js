const mongoose = require("mongoose")


module.exports = ()=>{
    mongoose.connect("mongodb://localhost/clubHouse", { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
      if (err) throw err;
      console.log("Connected to db");
    }
    );
}


const mongoose = require("mongoose");

const uri =
  "mongodb+srv://gangajal166:Ashu15o1945o166@cluster0.czkc2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose;

// mongodb+srv://aditya:aditya@cluster0.gps4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;

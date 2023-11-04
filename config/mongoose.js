const mongoose = require("mongoose");

//Connecting to mongoose server
mongoose.connect("mongodb+srv://ayushtomar:qwerty123@cluster0.ljcjxms.mongodb.net/");

const db = mongoose.connection;

//Display error, if any, on starting the server. 
db.error("error",
         console.error.bind(console, "error in connecting with mongoDB"));

//Display this message if connected to server successfully.          
db.once("open", () => {
    console.log("successfully connecting with mongo DB")
});

module,exports = db;
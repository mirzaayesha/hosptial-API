const express = require("express");
const router = require("./routes/index.js");
const db  = require("./config/mongoose");
const bodyParser = require("body-parser");
const passport = require("passport")
const passportStrategy = require("./config/passport")

const app = express();
//Defining port
const port = process.env.PORT || 80;

//Setting up body parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//Handling all route
app.use("/", require("./routes/index.js"));

//Starting the server
app.listen(port, (err) => {
    if(err){
        console.log("Error while starting server : ", err );
    }
    else{
        console.log("Server is running on port", port);
    }
})
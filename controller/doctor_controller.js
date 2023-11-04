const Doctor = require("../models/doctors");
const jwt = require("jsonwebtoken")

//For registering doctor
module.exports.registerDoctor = async(req, res, next) => {
    try{
        const doctor = await Doctor.create(req.body);

        res.status(200).json({
            success : true,
            message : "doctor created successfully"
        })
    }catch(error){
        console.log("Error : ", error);
        res.status(500).json({
            success : false,
            message : "Error in creating doctor : " + error,

        })
    }
}

//For login of the doctor
module.exports.login = async (req, res, next) => {
    try{
        const user = await Doctor.findOne({email : req.body.email});
       console.log(user);
        
       if(!user || user.password != req.body.password){
            return res.json(422, {
                message : "LMAO Invalid username or password"
            })
        }
        
        const payload = {
            id: user.id,
            password: user.password,
        };

        const token  = jwt.sign(payload, "secret", {expiresIn : "1000000"} )
        res.status(200).json({
            success : true,
            token
        });   
    }catch(error){
       
        res.status(500).json({
            success : false,
            message : "Error in Logging in : " + error
        }); 
    }
}
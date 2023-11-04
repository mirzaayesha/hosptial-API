const Patient = require("../models/patient");

//For fetching all patients according to status
module.exports.statusSearch = async (req, res, next) => {
    try{
       const patient  = await Patient.find({
        reports : {$elemMatch : {status : req.params.status}}
       })
        res.status(200).json({
            success : true,
            data : patient
        });
    }catch(error){
        console.log( error);
        res.status(500).json({
            success : false,
            message : "Error in fetching result : " + error
    })
    }
}
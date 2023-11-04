const Patient = require("../models/patient");

//For registering the doctor
module.exports.registerPatient = async (req, res, next) => {
    try{
        const patient = await Patient.create(req.body);
        console.log(req.body);
        res.status(200).json({
            success : true,
            message : "successfully created a patient"
        });
    }catch(error){
        console.log( error);
        res.status(500).json({
            success : false,
            message : "Error in creating Patient, internal server error : " + error
    })
    }
}

//For creating report
module.exports.createReport = async (req, res, next) => {
    try{
         console.log(req.body);
        const patient = await Patient.findById(req.params.id)
        
        req.body.date = Date.now();

        patient.reports.push(req.body);

        patient.save();

        res.status(200).json({
            success : true,
            message : "Report submitted successfully"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Error in creating report : " + error
    })
    }
}

//For fetching all reports of a particular patient
module.exports.all_reports = async (req, res, next) => {
    try{
       const patient  = await Patient.findById(req.params.id)
        res.status(200).json({
            success : true,
            reports : patient.reports
        });
    }catch(error){
        console.log( error);
        res.status(500).json({
            success : false,
            message : "Error in fetching reports : " + error
    })
    }
}
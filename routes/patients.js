const express = require("express");
const passport = require("passport")
const router = express.Router();
const patientsController = require("../controller/patients_controller");

//Routes related to patients
router.post("/register",passport.authenticate("jwt", {session: false}) ,patientsController.registerPatient)
router.post("/:id/create_report",passport.authenticate("jwt", {session: false}) ,patientsController.createReport);
router.get("/:id/all_report", passport.authenticate("jwt", {session: false}),patientsController.all_reports);

module.exports = router;
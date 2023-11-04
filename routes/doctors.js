const express = require("express");

const router = express.Router();
const doctorController = require("../controller/doctor_controller");

//Routes related to doctors
router.post("/register",doctorController.registerDoctor)
router.post("/login", doctorController.login);



module.exports = router;
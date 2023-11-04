const express = require("express");
const passport = require("passport")
const router = express.Router();
const reportsController = require("../controller/reports_Controller");


//Routes related to reports
router.get("/:status",passport.authenticate("jwt", {session: false}) ,reportsController.statusSearch);


module.exports = router;
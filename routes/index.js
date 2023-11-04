const express = require("express");
const router = express.Router();

// Route handling for different sections: reports, patients, and doctors.
router.use("/reports" ,require("./reports"));
router.use("/patients", require("./patients"))
router.use("/doctors", require("./doctors"))


module.exports = router;
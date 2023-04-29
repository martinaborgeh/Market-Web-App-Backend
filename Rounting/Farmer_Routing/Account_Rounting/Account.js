const handleFarmerSignup = require("../../../Contoller/Farmer_Controller/Account_Controller/Account")
const express = require("express")
const router = express.Router()
router.post('/FarmerSignup',handleFarmerSignup)
module.exports = router
const handlesellerSignup = require("../../../Contoller/Seller_Controller/Account_Controller/Account")
const express = require("express")
const router = express.Router()
router.post('/SellerSignup',handlesellerSignup)
module.exports = router
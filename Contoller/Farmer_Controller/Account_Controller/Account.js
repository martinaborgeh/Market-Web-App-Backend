
const SaveFarmerDetails = require("../../../Services/FarmerServices/AccountServices/Account")

function handleFarmerSignup(req,res)
{
    const {Firstname, Lastname,Location} = req.body
    console.log(Firstname,Lastname,Location)
    SaveFarmerDetails({Firstname, Lastname,Location})
}
    
module.exports = handleFarmerSignup
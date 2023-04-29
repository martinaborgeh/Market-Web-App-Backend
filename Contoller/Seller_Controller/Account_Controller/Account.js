const SaveSellerDetails = require("../../../Services/SellerServices/AccountServcics/Account1")

function HandleSellerSignup(req,res)
{
    const {Firstname, Lastname,Location} = req.body
    console.log(Firstname,Lastname,Location)
    SaveSellerDetails({Firstname, Lastname,Location})
}
    
module.exports = HandleSellerSignup
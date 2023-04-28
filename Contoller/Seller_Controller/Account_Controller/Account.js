const Sellerdb = require("../../../Model/SellerDb")

async function HandleSellerSignup(req,res)
{
    const {Firstname, Lastname,Location} = req.body
    console.log(Firstname,Lastname,Location)
    try{
        const sellerdatabase = new Sellerdb({
            Firstname,Lastname,Location
        })
        await sellerdatabase.save()
        console.log("It has been saved successfully")
    }catch(err){
        console.log(err)
    }
}
    
module.exports = HandleSellerSignup
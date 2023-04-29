const Sellerdb = require("../../../Model/SellerModel")
 async function SaveSellerDetails(Details){

    try{
        const sellerdatabase = new Sellerdb(
            Details
        )
        await sellerdatabase.save()
        console.log("It has been saved successfully")
    }catch(err){
        console.log(err)
    }
}
module.exports = SaveSellerDetails
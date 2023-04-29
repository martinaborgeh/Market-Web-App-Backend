

const Farmerdb = require("../../../Model/FarmerdbModel")
 async function SaveFarmerDetails(Details){

    try{
        const sellerdatabase = new Farmerdb(
            Details
        )
        await sellerdatabase.save()
        console.log("It has been saved successfully")
    }catch(err){
        console.log(err)
    }
}
module.exports = SaveFarmerDetails
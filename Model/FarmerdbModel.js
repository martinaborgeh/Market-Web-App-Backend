const mongoose = require("mongoose")
const Farmerdb = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true

    },
    Location:{
        type:String,
        required:true
    }

})



module.exports=mongoose.models['Farmerdb']||mongoose.model('Farmerdb',Farmerdb)
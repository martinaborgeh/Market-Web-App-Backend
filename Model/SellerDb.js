const mongoose = require("mongoose")


const Sellerdb = new mongoose.Schema({
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

module.exports = mongoose.models['Sellerdb']||mongoose.model('Sellerdb',Sellerdb)
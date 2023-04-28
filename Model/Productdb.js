const mongoose = require("mongoose")

const Farmerdb = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true

    },
    Location:{
        type:String,
        required:true
    }

})

export default mongoose.models['Farmerdb']||mongoose.model('Farmerdb',Farmerdb)
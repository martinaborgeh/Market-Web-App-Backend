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






const Productdb = new mongoose.Schema({
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




const Storedb = new mongoose.Schema({
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



module.exports=mongoose.models['Productdb']||mongoose.model('Productdb',Productdb)

module.exports = mongoose.models['Storedb']||mongoose.model('Storedb',Storedb)

module.exports = mongoose.models['Sellerdb']||mongoose.model('Sellerdb',Sellerdb)


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


module.exports=mongoose.models['Productdb']||mongoose.model('Productdb',Productdb)
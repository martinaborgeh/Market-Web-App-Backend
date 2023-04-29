const DbConnect = require("./Database")
const dotenv = require('dotenv')
const sellerrouter = require("./Rounting/Seller_Rounting/Account_Routing/Account")
const farmerrouter = require("./Rounting/Farmer_Routing/Account_Rounting/Account")
const express = require("express")
const  cors = require("cors")
dotenv.config()


const Port = process.env.Port||5000
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',sellerrouter)
app.use('/',farmerrouter)
app.listen(Port,()=>{
    DbConnect()
    
    console.log("The server is running on port",Port)})

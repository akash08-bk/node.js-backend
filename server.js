const express = require('express')
require('dotenv').config()
const connectdb = require('./config/mongodbconfig')
const userRoutes=require('./routes/userRoute')
var cors=require('cors')
connectdb();
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/users',userRoutes)
app.get('/',(req,res)=>{
    res.status(200).send('the apps working  fine')

})
const PORT = process.env.PORT||2000
app.listen(PORT,()=>{
    console.log(`running on ${PORT}`);
    
}
)
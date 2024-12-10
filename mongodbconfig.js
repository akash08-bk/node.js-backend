const mongoose = require('mongoose')
const connectdb=async ()=>{
try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DB connected successfully");
    
    
} catch (error) {
    console.log("DB connection failed",error.message);
    
    
}
}
module.exports=connectdb
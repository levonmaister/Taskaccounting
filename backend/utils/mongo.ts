const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

export async function connectToMongo(){
    
    const MONGODB_URI = process.env.MONGODB_URI;

    try{
        await mongoose.connect(MONGODB_URI).then(()=>{
            console.log("SUCCESFULLY CONNECTED TO MONGO")
        })
    }
    catch(error: unknown){
        console.log(error)
        process.exit(1)
    }
}


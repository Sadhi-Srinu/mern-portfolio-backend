import mongoose from "mongoose";

// const URL = `mongodb+srv://reddysrinu138:NzzQe9rAiXJhWiUU@cluster0.lm5bb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` 
// const URL = `mongodb://localhost:27017`
 
const dbConnection = async() => {
    await mongoose.connect(process.env.MONGO_URI, {
    }).then(()=>{
        console.log("Connected to database.");
    }).catch((error)=>{
        console.log(`Some Error Occured While Connecting to Database:${error}`);
    })
}


export default dbConnection;
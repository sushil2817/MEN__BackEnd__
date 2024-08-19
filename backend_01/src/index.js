// data base is in another continental



// -------------second method---------------
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"     
import connectDB from "./db/index.js";   

dotenv.config({
    path:'./env'
})

connectDB()










// -------------first approach-------------

/* 

import mongoose from "mongoose";
import {DB_NAME} from "./constant.js"

import express from "express"
const app = express()


;(async ()=>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("ERRR: ",error);
        throw error
      })
      app.listen(process.env.PORT,()=>{
        console.log(`APP is listening on port ${process.env.PORT}`);
        
      })
    } catch (error) {
        console.error("MongoDB Connection Error ", error);
        throw error
        
    }
}
)()

*/





// // require('dotenv').config({path:'./env'})
// import dotenv from "dotenv"

// import connectDB from "./db/index.js";

// dotenv.config({
//     path: './env'
// })

// connectDB( )
// /*

// // first approach for DB connection

// import express from "express";
// const app = express();

// ;( async() => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//        app.on('error',(error)=>{
//         console.log("ERRR: ",error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//            console.log(`App is listening on port ${process.env.PORT}`);

//        })

//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw err
//     }
// })()

// */

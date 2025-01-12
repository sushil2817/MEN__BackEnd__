// data base is in another continental
// -------------second method---------------
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: './.env'
})

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙ Server is running at port: ${process.env.PORT}`);

    })
  })
  .catch((err) => {
    console.log("Mongo db connection failed!!! ", err);

  })








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

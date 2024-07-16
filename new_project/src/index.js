//require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'
import connectDB from './db/index.js'
import {app} from './app.js'

console.log('MongoDB URL:', process.env.MONGODB_URL);
dotenv.config({
    path:'./.env'
})

connectDB()

.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on ", process.env.PORT);
    });
})
.catch((error)=>{
    console.log("MongoDB connection error:" , error)
})















/*
import express from 'express'
import app = express()

;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",()=>{
            console.error("error:" error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("error:" error)
        
        throw error
    }
})()
    */
import dotenv from 'dotenv';
import { app } from './app.js';
import dbConnect from './db/dbConnect.js'; './db/dbConnect.js';
import express from 'express'
// Ensure this is imported to establish DB connection


dotenv.config({
    path: '/env'  // if giving prob try "./.env"
})


dbConnect()
.then(()=>{
  app.get('/', (req, res) => {
  res.send('Hello World!',express.RequestHandler)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT }`)
})
})
.catch((error) => {
   console.log("MONGODB connection failed!!!: ", error)
})


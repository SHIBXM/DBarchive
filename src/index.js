import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/dbIndex.js';


connectDB()
.then(() => {
  application.listen(process.env.PORT||8000, () => {
    console.log(`server is running at port : ${process.env.PORT}`);
  })
})
.catch((error) => {
    console.log("MONGO db connnection failed !!!", err);
  
})



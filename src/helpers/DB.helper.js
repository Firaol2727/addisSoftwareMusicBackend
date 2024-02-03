import mongoose from "mongoose"
import { Song } from "../models/song.model.js"
const InitializeDatabase=async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Songs')
    .then(()=>{
      console.log("Connection was successful ") 
       
    }).catch((error)=>{
        console.log("error occured "+error)
    })
}
export {InitializeDatabase,Song};
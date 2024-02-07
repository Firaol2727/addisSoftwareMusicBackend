import express from "express";
import mongoose from "mongoose";
import { InitializeDatabase } from "./helpers/DB.helper.js";
import bodyParser from "body-parser";
import morganBody from 'morgan-body';
import SongRouter from "./routes/song.router.js";
import AnalyticsRouter from './routes/analytics.router.js';
import cors from 'cors';
InitializeDatabase();
const app =express();
morganBody(app);
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    // Additional CORS options
  })
);
app.use(bodyParser.json());

app.use('/song',SongRouter);
app.use('/analytics',AnalyticsRouter);
app.get("/hello",(req,res)=>{
    res.send("Hello how are you ")
})

app.use((error, request, response, next) => {
    console.error("Error has come ",error)
    if (error instanceof Error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error.payload);
        }else{
            response.status(500).json(error);
        }
        
    } else {
      response.status(500).json({
        timestamp: moment(),
        errors: ["Internal Server Error"],
      });
    }
  });
app.listen(3001,()=>{  
    console.log("Server started running ",3001)
})
import mongoose from 'mongoose';
const Schema= mongoose.Schema;
    const Songschema= new Schema({
    title:{
        type:String,
        required:true, 
        unique:true
    },
    artist:{
        type:String,
        required:true
    },
    album:{
        type:String,
        required:false
    },
    genre:{ 
            type:String,
            required:false
        }
    
});
export const Song=new mongoose.model("Songs",Songschema);
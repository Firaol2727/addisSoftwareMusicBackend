import { BadRequestError } from "../../Errors/Error.js";
import { Messages } from "../../Errors/Messages.js";
import { SongsService } from "../services/Songs.services.js";

export class SongController{
    static async create(request,response,next){
        let errors=[];
        if(request.body.title==null){
            errors.push(Messages.TITLE_IS_REQUIRED)
        }
        if(!request.body.artist==null){
            errors.push(Messages.ARTIST_IS_REQUIRED)
        }
        if(errors.length!=0){
            next(new BadRequestError("",errors))
        }
        SongsService.create(request.body.title,request.body.artist,request.body.album,request.body.genre)
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async list(request,response,next){
        let query=request.query;
        console.log("query ",query)
        SongsService.list(query)
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async update(request,response,next){
        let query=request.body;
        let id=request.params.id;
        console.log("query ",query)
        SongsService.update(id,query)
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async remove (request,response,next){
        SongsService.remove(request.body.id)
        .then(data=>{
            response.send(data);
        })
        .catch((error)=>{
            next(error)
        })
    }
}
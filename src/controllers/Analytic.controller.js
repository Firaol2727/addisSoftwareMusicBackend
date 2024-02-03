import { BadRequestError } from "../../Errors/Error.js";
import { AnalyticsService } from "../services/analytics.service.js";

export class AnalyticsController{
    static async countNoOfSongs(request,response,next){
        AnalyticsService.countNoOfSongs()
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async countNoOfArtist(request,response,next){
        AnalyticsService.countNoOfArtist()
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async countNoOfGenres(request,response,next){
        AnalyticsService.countNoOfGenres()
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async countNoOfAlbums(request,response,next){
        AnalyticsService.countNoOfAlbums()
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async countNoOfSongsInEveryGenre(request,response,next){
        AnalyticsService.countNoOfSongsInEveryGenre()
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async countNoOfSongsAndAlbumsOfEachArtist(request,response,next){
        AnalyticsService.countNoOfSongsAndAlbumsOfEachArtist()
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async countNoOfSongsInEachAlbum(request,response,next){
        AnalyticsService.countNoOfSongsInEachAlbum()
        .then((data)=>{
            console.log("data controller ",data)
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
    static async countNoOfAlbumsOfEachArtist(request,response,next){
        AnalyticsService.countNoOfAlbumsOfEachArtist()
        .then((data)=>{
            response.json(data);
        })
        .catch((error)=>{
            next(error);
        })
    }
}
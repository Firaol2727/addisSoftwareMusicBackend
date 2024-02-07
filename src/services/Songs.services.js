import mongoose from "mongoose";
import { BadRequestError } from "../../Errors/Error.js";
import { Song } from "../models/song.model.js";
export class SongsService {
    static async create( title,artist,album,genre){
        return new Promise((resolve, reject) => {
        Song.create({
            title:title,
            artist:artist,
            album:album,
            genre:genre
        })
        .then((data)=>{
            console.log("data ",data);
            let song= {
                id:data._id,
                title:data.title,
                artist:data.artist,
                genre:data.genre
            }
            console.log("song",song)
            resolve(song);
        })
        .catch((error)=>{
            reject (new BadRequestError("",error))
        })
    })
    }
    static async list( query){
        return new Promise((resolve, reject) => {
        Song.find(query)
        .then((songs)=>{
            resolve(songs);
        })
        .catch((error)=>{
            reject (new BadRequestError("",error))
        })
    })
    }
    static async update(id,query){
        return new Promise((resolve, reject) => {
        Song.findOneAndUpdate({_id:id},query,{ new: true })
        .then((songs)=>{
            resolve(songs);
        })
        .catch((error)=>{
            reject (new BadRequestError("",error))
        })
    })
    }
    static async remove(id){
        return new Promise((resolve, reject) => {
        Song.findOneAndDelete({_id:id})
        .then((songs)=>{
            resolve(songs);
        })
        .catch((error)=>{
            reject (new BadRequestError("",error))
        })
    })
    }
    static async fetchOne( id){
        return new Promise((resolve, reject) => {
        Song.findOne({_id:id})
        .then((songs)=>{
            resolve(songs);
        })
        .catch((error)=>{
            reject (new BadRequestError("",error))
        })
    })
    }
    static async getArtistsAlbums(limit){
        return new Promise((resolve, reject) => {
            Song.aggregate([
                {
                    $match: { album: { $exists: true, $ne: '' } }
                  },
                { $group: { _id: "$album", artist: { $first: "$artist" } } },
                { $project: { album: "$_id", artist: 1, _id: 0 } },
                { $limit: 4 },
              ])
            .then((artists)=>{
                resolve(artists);
            })
            .catch((error)=>{
                reject (new BadRequestError("",error))
            })
    })
    }
}
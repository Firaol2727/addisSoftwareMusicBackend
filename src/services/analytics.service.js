import mongoose from "mongoose";
import { BadRequestError } from "../../Errors/Error.js";
import { Song } from "../models/song.model.js";
export class AnalyticsService {
    static async countNoOfSongs( ){
        return new Promise((resolve, reject) => {
        Song.countDocuments()
        .then((data)=>{
            resolve(data);
        })
        .catch((error)=>{
            reject (new BadRequestError("",error))
        })
    })
    }
    static async countNoOfArtist( query){
        return new Promise((resolve, reject) => {
        Song.distinct('artist')
        .then((songs)=>{
            resolve(songs.length);
        })
        .catch((error)=>{
            reject (new BadRequestError("",error))
        })
    })
    }
    static async countNoOfGenres( query){
        return new Promise((resolve, reject) => {
        Song.distinct('genre')
        .then((genres)=>{
            resolve(genres.length);
        })
        .catch((error)=>{
            reject (new BadRequestError("",error))
        })
    })
    }
    static async countNoOfAlbums( query){
        return new Promise((resolve, reject) => {
        Song.distinct('album')
        .then((albums)=>{
            resolve(albums.length);
        })
        .catch((error)=>{
            reject (new BadRequestError("",error))
        })
    })
    }

    static async countNoOfSongsInEveryGenre(id,query){
        return new Promise((resolve, reject) => {
            Song.aggregate([
                {
                    $group: {
                      _id: "$genre",
                      noOfSongs: { $sum: 1 }
                    }
                },
                {
                    $project: {
                        noOfSongs: 1,
                        genre: "$_id",
                        _id: 0
                    }
                }
              ])
            .then((songs)=>{
                resolve(songs);
            })
            .catch((error)=>{
                reject (new BadRequestError("",error))
            })
    })
    }
    static async countNoOfSongsAndAlbumsOfEachArtist(id,query){
        return new Promise((resolve, reject) => {
            Song.aggregate([
                {
                    $group: {
                      _id: "$artist",
                      noOfSongs: { $sum: 1 },
                      uniqueAlbums: { $addToSet: "$album" }
                    }
                },
                {
                    $project: {
                        noOfSongs: 1,
                        numberOfAlbums: { $size: "$uniqueAlbums" },
                        artist: "$_id",
                        _id: 0
                    }
                }
              ])
            .then((songs)=>{
                resolve(songs);
            })
            .catch((error)=>{
                reject (new BadRequestError("",error))
            })
    })
    }
    static async countNoOfSongsInEachAlbum(id,query){
        return new Promise((resolve, reject) => {
            Song.aggregate([
                {
                    $match: {
                      album: { $nin: ["", null] } // Filter out empty or null albums
                    }
                  },
                {
                    $group: {
                      _id: "$album",
                      noOfSongs: { $sum: 1 }
                    }
                },
                {
                    $project: {
                    noOfSongs: 1,
                    album: "$_id",
                    _id: 0
                    }
                }
              ])
            .then((songs)=>{
                resolve(songs);
            })
            .catch((error)=>{
                reject (new BadRequestError("",error))
            })
    })
    }
    static async countNoOfAlbumsOfEachArtist(id,query){
        return new Promise((resolve, reject) => {
            Song.aggregate([
                {
                  $group: {
                    _id: "$artist",
                    uniqueAlbums: { $addToSet: "$album" }
                  }
                },
                {
                  $project: {
                    artist: "$_id",
                    numberOfAlbums: { $size: "$uniqueAlbums" },
                    _id: 0
                  }
                }
              ])
            .then((albums)=>{
                resolve(albums);
            })
            .catch((error)=>{
                reject (new BadRequestError("",error))
            })
    })
    }
    
}
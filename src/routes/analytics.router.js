import express from "express";
import { AnalyticsController } from "../controllers/Analytic.controller.js";
let router= express.Router();
/**
 * Create A song
 */
router
    .get('/countNoOfSongs',AnalyticsController.countNoOfSongs)
    .get('/countNoOfArtist',AnalyticsController.countNoOfArtist)
    .get('/countNoOfGenres',AnalyticsController.countNoOfGenres)
    .get('/countNoOfAlbums',AnalyticsController.countNoOfAlbums)

    .get('/countNoOfSongsInEveryGenre',AnalyticsController.countNoOfSongsInEveryGenre)
    .get('/countNoOfSongsAndAlbumsOfEachArtist',AnalyticsController.countNoOfSongsAndAlbumsOfEachArtist)
    .get('/countNoOfSongsInEachAlbum',AnalyticsController.countNoOfSongsInEachAlbum)
    .get('/countNoOfAlbumsOfEachArtist',AnalyticsController.countNoOfAlbumsOfEachArtist)


export default router;
import express from "express";
import { SongController } from "../controllers/Song.controller.js";
import cors from 'cors';

let router= express.Router();
/**
 * Create A song
 */
router.post('/create',SongController.create)
      .get('/list',SongController.list)
      .post('/update/:id',SongController.update)
      .post('/remove',SongController.remove)
      .get('/detail/:id',SongController.fetchOne)
      .get('/getArtistsAlbums',SongController.getArtistsAlbums)

export default router;
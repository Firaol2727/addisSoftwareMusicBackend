import express from "express";
import { SongController } from "../controllers/Song.controller.js";
let router= express.Router();
/**
 * Create A song
 */
router.post('/create',SongController.create)
      .get('/list',SongController.list)
      .post('/update/:id',SongController.update)
      .post('/remove',SongController.remove)


export default router;
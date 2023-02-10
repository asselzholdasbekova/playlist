import { Router } from 'express';
import { SongController } from '../controller/SongController';

const router = Router();

router.post('/songs', SongController.postSong);
router.get("/songs", SongController.getAllSongs);
router.get("/songs/:id", SongController.getSongById);
router.put("/songs/:id", SongController.updateSong);
router.delete("/songs/:id", SongController.deleteSong);

export { router as songRouter };
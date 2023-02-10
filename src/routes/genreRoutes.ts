import { Router } from 'express';
import { GenreController } from '../controller/GenreController';

const router = Router();

router.post('/genres', GenreController.postGenre);
router.get("/genres", GenreController.getAllGenres);
router.get("/genres/:id", GenreController.getGenreById);
router.put("/genres/:id", GenreController.updateGenre);
router.delete("/genres/:id", GenreController.deleteGenre);

export { router as genreRouter };
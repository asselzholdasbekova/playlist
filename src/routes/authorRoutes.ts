import { Router } from 'express';
import { AuthorController } from '../controller/AuthorController';

const router = Router();

router.post('/authors', AuthorController.postAuthor);
router.get("/authors", AuthorController.getAllAuthors);
router.get("/authors/:id", AuthorController.getAuthorById);
router.put("/authors/:id", AuthorController.updateAuthor);
router.delete("/authors/:id", AuthorController.deleteAuthor);

export { router as authorRouter };
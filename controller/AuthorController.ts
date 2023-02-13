import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Author } from "../entity/Author";

export class AuthorController {
    
    static postAuthor = async (req: Request, res: Response) => {
        const newAuthor = {
            fullname: req.body.fullname
        }
        const author = AppDataSource.getRepository(Author).create(newAuthor);
        const result = await AppDataSource.getRepository(Author).save(author);

        return res.json(result);
    }

    static updateAuthor = async (req: Request, res: Response) => {
        const author = await AppDataSource.getRepository(Author).findOneBy({ id: Number(req.params.id) });

        if (author) {
            AppDataSource.getRepository(Author).merge(author, req.body);
            const result = await AppDataSource.getRepository(Author).save(author);

            return res.json(result);
        }
        return res.json({ msg: "Author Not Found!" });
    }

    static deleteAuthor = async (req: Request, res: Response) => {
        const id = req.params.id;
        const author = await AppDataSource.getRepository(Author).delete(id);
        return res.json(author);
    }

    static getAuthorById = async (req: Request, res: Response) => {
        const author = await AppDataSource.getRepository(Author).findOne({ where: { id: Number(req.params.id) }, relations: { songs: true } });
        return res.json(author);
    }

    static getAllAuthors = async (req: Request, res: Response) => {
        const result = await AppDataSource.getRepository(Author).find({ relations: { songs: true } });
        return res.json(result);
    }
    
}
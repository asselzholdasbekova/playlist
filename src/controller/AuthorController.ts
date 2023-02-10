import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Author } from "../entity/Author";

export class AuthorController {
    
    static postAuthor = async (req: Request, res: Response) => {
        const newAuthor = {
            fullname: req.body.fullname
        }
        const author = getRepository(Author).create(newAuthor);
        const result = await getRepository(Author).save(author);

        return res.json(result);
    }

    static updateAuthor = async (req: Request, res: Response) => {
        const author = await getRepository(Author).findOneBy({ id: Number(req.params.id) });

        if (author) {
            getRepository(Author).merge(author, req.body);
            const result = await getRepository(Author).save(author);

            return res.json(result);
        }
        return res.json({ msg: "Author Not Found!" });
    }

    static deleteAuthor = async (req: Request, res: Response) => {
        const id = req.params.id;
        const author = await getRepository(Author).delete(id);
        return res.json(author);
    }

    static getAuthorById = async (req: Request, res: Response) => {
        const author = await getRepository(Author).findOneBy({ id: Number(req.params.id) });
        return res.json(author);
    }

    static getAllAuthors = async (req: Request, res: Response) => {
        const result = await getRepository(Author).find();
        return res.json(result);
    }
    
}
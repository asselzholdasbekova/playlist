import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Genre } from "../entity/Genre";

export class GenreController {

    static postGenre = async (req: Request, res: Response) => {
        const newGenre = {
            name: req.body.name
        }
        const genre = getRepository(Genre).create(newGenre);
        const result = await getRepository(Genre).save(genre);

        return res.json(result);
    }

    static updateGenre = async (req: Request, res: Response) => {
        const genre = await getRepository(Genre).findOneBy({ id: Number(req.params.id) });

        if (genre) {
            getRepository(Genre).merge(genre, req.body);
            const result = await getRepository(Genre).save(genre);
            return res.json(result);
        }
        return res.json({ msg: "Genre Not Found!" });
    }

    static deleteGenre = async (req: Request, res: Response) => {
        const id = req.params.id;
        const genre = await getRepository(Genre).delete(id);
        return res.json(genre);
    }

    static getGenreById = async (req: Request, res: Response) => {
        const genre = await getRepository(Genre).findOneBy({ id: Number(req.params.id) });
        return res.json(genre);
    }

    static getAllGenres = async (req: Request, res: Response) => {
        const result = await getRepository(Genre).find();
        return res.json(result);
    }
    
}
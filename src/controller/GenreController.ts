import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Genre } from "../entity/Genre";

export class GenreController {

    static postGenre = async (req: Request, res: Response) => {
        const newGenre = {
            name: req.body.name
        }
        const genre = AppDataSource.getRepository(Genre).create(newGenre);
        const result = await AppDataSource.getRepository(Genre).save(genre);

        return res.json(result);
    }

    static updateGenre = async (req: Request, res: Response) => {
        const genre = await AppDataSource.getRepository(Genre).findOneBy({ id: Number(req.params.id) });

        if (genre) {
            AppDataSource.getRepository(Genre).merge(genre, req.body);
            const result = await AppDataSource.getRepository(Genre).save(genre);
            return res.json(result);
        }
        return res.json({ msg: "Genre Not Found!" });
    }

    static deleteGenre = async (req: Request, res: Response) => {
        const id = req.params.id;
        const genre = await AppDataSource.getRepository(Genre).delete(id);
        return res.json(genre);
    }

    static getGenreById = async (req: Request, res: Response) => {
        const genre = await AppDataSource.getRepository(Genre).findOne({ where: { id: Number(req.params.id) }, relations: { songs: true } });
        return res.json(genre);
    }

    static getAllGenres = async (req: Request, res: Response) => {
        const result = await AppDataSource.getRepository(Genre).find({ relations: { songs: true } });
        return res.json(result);
    }
    
}
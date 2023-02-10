import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Song } from "../entity/Song";

export class SongController {

    static postSong = async (req: Request, res: Response) => {
        const newSong = {
            title: req.body.title,
            yearOfRelease: req.body.year_of_release,
            author: req.body.author_id,
            genre: req.body.genre_id
        }
        const song = getRepository(Song).create(newSong);
        const result = await getRepository(Song).save(song);

        return res.json(result);
    }

    static updateSong = async (req: Request, res: Response) => {
        const song = await getRepository(Song).findOneBy({ id: Number(req.params.id) });

        if (song) {
            getRepository(Song).merge(song, req.body);
            const result = await getRepository(Song).save(song);

            return res.json(result);
        }
        return res.json({ msg: "Song Not Found!" });
    }

    static deleteSong = async (req: Request, res: Response) => {
        const id = req.params.id;
        const song = await getRepository(Song).delete(id);
        return res.json(song);
    }

    static getSongById = async (req: Request, res: Response) => {
        const song = await getRepository(Song).findOneBy({ id: Number(req.params.id) });
        return res.json(song);
    }

    static getAllSongs = async (req: Request, res: Response) => {
        const result = await getRepository(Song).find();
        return res.json(result);
    }
    
}
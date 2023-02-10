import "reflect-metadata"
import { DataSource } from "typeorm"
import { Author } from "./entity/Author"
import { Genre } from "./entity/Genre"
import { Song } from "./entity/Song"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "express_intro",
    synchronize: true,
    logging: false,
    entities: [
        Song, Author, Genre
    ],
    migrations: [],
    subscribers: [],
})

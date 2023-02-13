import "reflect-metadata"
import { DataSource } from "typeorm"
import { Author } from "./entity/Author"
import { Genre } from "./entity/Genre"
import { Song } from "./entity/Song"

export const AppDataSource = new DataSource({
    name: "default",
    type: "postgres",
    url: "postgres://cdxmntqf:y6xVhDs2uCIpZOu1YY7cYB_-p3GR8oic@trumpet.db.elephantsql.com/cdxmntqf",
    port: 5432,
    username: "cdxmntqf",
    password: "y6xVhDs2uCIpZOu1YY7cYB_-p3GR8oic",
    database: "express_intro",
    synchronize: true,
    logging: false,
    entities: [
        Song, Author, Genre
    ],
    migrations: [],
    subscribers: [],
})
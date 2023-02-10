import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import * as cors from "cors";
import { authorRouter } from "./routes/authorRoutes";
import { songRouter } from "./routes/songRoutes";
import { genreRouter } from "./routes/genreRoutes";

AppDataSource.initialize().then(async () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use(songRouter);
    app.use(authorRouter);
    app.use(genreRouter);

    const port = 3001;

    app.listen(port, () => {
        console.log(`Server started listening on port ${ port }`);
    });

}).catch(error => console.log(error))

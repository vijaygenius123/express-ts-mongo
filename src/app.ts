import express from 'express'
import config from 'config'
import connect from './utils/db';
import log from "./utils/logger";

const PORT = config.get<number>("port");
const HOST = config.get<string>("host");

const app = express();
app.use(express.json());

app.listen(PORT, HOST, async ()=> {
    log.info(`Server listening at http://${HOST}:${PORT}`)
    await connect()
})

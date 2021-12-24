import express from 'express'
import config from 'config'

const PORT = config.get("port") as number;
const HOST = config.get("host") as string;

const app = express();
app.use(express.json());

app.listen(PORT, HOST, ()=> {
    console.log(`Server listening at http://${HOST}:${PORT}`)
})

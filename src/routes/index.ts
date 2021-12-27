import {Express, Request, Response} from "express";
import validateResource from "../middlewares/validateResource";
import {createUserHandler} from "../controllers/user.controller";
import {createUserSchema} from "../schemas/user.schema";

function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.post('/api/users', validateResource(createUserSchema), createUserHandler)
}

export default routes

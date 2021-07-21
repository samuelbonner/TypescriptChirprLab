// import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "./chirpstore";
import * as express from "express";
// import * as chirpStore from "./chirpstore.js"
import chirpsRouter from "./chirps"
// import usersRouter from "./users"

let router = express.Router();

router.use('/chirps', chirpsRouter);
// router.use('/users', usersRouter);

export default router
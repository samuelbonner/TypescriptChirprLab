// import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "./chirpstore";
// import * as chirpStore from "./chirpstore.js"
// import usersRouter from "./users"
import * as express from "express";
import chirpsRouter from "./chirps"

const router = express.Router();

router.use('/chirps', chirpsRouter);
// router.use('/users', usersRouter);

export default router
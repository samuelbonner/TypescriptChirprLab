
import {
  GetChirps,
  GetChirp,
  UpdateChirp,
  CreateChirp,
  DeleteChirp,
} from "./chirpstore";
import * as express from "express";
const router = express.Router();

// Gets all chirps if an id is not specified, gets only a specific chirp if ID is specified.
router.get("/:id?", (req, res) => {
  const id = req.params.id;
  if (id) {
    res.json(GetChirp(id));
  } else {
    res.send(GetChirps());
    const chirps = GetChirps()
    let chirpArr: any[] = []
    Object.keys(chirps).map(key => chirpArr.push({id: key, name: chirps[key].name, msg: chirps[key].msg}))
    chirpArr.pop()
  }
});

// Creates a chirp
router.post("/", (req, res) => {
  CreateChirp(req.body);
  res.sendStatus(200);
});

// PUT a specific chirp (edit)
router.put("/:id", (req, res) => {
  const id = req.params.id;
  UpdateChirp(id, req.body);
  res.sendStatus(200);
});

// DELETE a specific chirp
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  DeleteChirp(id);
  res.sendStatus(200);
});

export default router;

// * In `routes/chirps.js`, create `GET`, `POST`, `PUT`, `DELETE` methods on a router that is created in `chirps.js`.
//   * Import `chirpsstore`, and use it to read and write chirps to the json file.
//     * The json file will be created the first time you run successfully!
//     * Remember to export your router with `module.exports`.

import {
  GetChirps,
  GetChirp,
  UpdateChirp,
  CreateChirp,
  DeleteChirp,
} from "./chirpstore";
import * as express from "express";
// import * as chirpStore from "./chirpstore.js"
const router = express.Router();

// Gets all chirps if an id is not specified, gets only a specific chirp if ID is specified.
router.get("/:id?", (req, res) => {
  const id = req.params.id;
  if (id) {
    res.json(GetChirp(id));
  } else {
    res.send(GetChirps());
    //         const chirps = chirpStore.GetChirps()
    // let chirpArr: any[] = []
    // Object.keys(chirps).map(key => chirpArr.push({id: key, name: chirps[key].name, msg: chirps[key].msg}))
    // chirpArr.pop()
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

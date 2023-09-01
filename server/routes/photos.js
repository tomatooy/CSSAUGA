import { addPhoto,getPhoto } from "../controllers/photos.js";
import express from 'express'

const router = express.Router()

router.post("/add", addPhoto);
router.get("/get",getPhoto);


export default router;
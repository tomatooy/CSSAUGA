import { addPhoto,getPhoto,deletePhoto } from "../controllers/photos.js";
import express from 'express'

const router = express.Router()

router.post("/add", addPhoto);
router.get("/get",getPhoto);
router.delete("/delete",deletePhoto);

export default router;
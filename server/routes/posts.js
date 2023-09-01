import express from "express";
import { addPost,getPost,getSinglePost,getBannerPost,getRecommand } from "../controllers/posts.js"


const router = express.Router();


router.post("/add", addPost);
router.get("/get",getPost);
router.get("/getSingle",getSinglePost)
router.get("/getBanner",getBannerPost)
router.get("/getRecommand",getRecommand)

export default router;

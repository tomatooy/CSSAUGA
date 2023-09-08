import express from "express";
import { addPost,getPost,getSinglePost,getBannerPost,getRecommand,getAllPosts,postPreview,updateShow, getPostData, updatePost } from "../controllers/posts.js"


const router = express.Router();


router.post("/add", addPost);
router.get("/get",getPost);
router.get("/getSingle",getSinglePost)
router.get("/getBanner",getBannerPost)
router.get("/getRecommand",getRecommand)
router.get("/admin/getAll",getAllPosts)
router.get("/admin/getPostData",getPostData)
router.get("/admin/postPreview",postPreview)
router.patch('/admin/updateShow',updateShow)
router.patch('/admin/updatePost',updatePost)

export default router;

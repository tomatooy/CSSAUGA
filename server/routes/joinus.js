import { saveForm,getForm } from "../controllers/joinus.js";
import express from 'express'

const router = express.Router()

router.post("/add", saveForm);
router.get("/get",getForm);


export default router;
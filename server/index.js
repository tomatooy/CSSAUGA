import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import photoRoutes from './routes/photos.js'
import formRoutes from './routes/joinus.js'
import userRoutes from './routes/users.js'

dotenv.config()
const app = express()
app.use(express.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(cors())
//routes
app.use("/auth", authRoutes)
app.use("/joinus", formRoutes)
app.use('/post', postRoutes)
app.use('/photo',photoRoutes)
app.use('/users', userRoutes);

//hi
app.get('/', (req, res) => {
  res.send("tomato cssa server")
})



const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Port: localhost:${PORT}`);
    });


  })
  .catch((error) => console.log(`${error} did not connect`));

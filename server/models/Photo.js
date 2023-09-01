import mongoose from "mongoose";

const photoSchema = mongoose.Schema({
   url  :String,
   height : Number,
   width: Number,
})

const Photo = mongoose.model('Photo',photoSchema)
export default Photo
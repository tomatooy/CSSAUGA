import mongoose from "mongoose";

const photoSchema = mongoose.Schema({
   src  :String,
   height : Number,
   width: Number,
},{
   timestamps: true // This option enables the timestamps feature
 })

const Photo = mongoose.model('Photo',photoSchema)
export default Photo
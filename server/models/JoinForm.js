import mongoose from "mongoose";

const JoinUsSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    major:String,
    year:String,
    text:String,
    date:Date
})

const joinForm = mongoose.model('joinform',JoinUsSchema)
export default joinForm
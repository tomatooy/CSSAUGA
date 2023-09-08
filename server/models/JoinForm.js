import mongoose from "mongoose";

const JoinUsSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    major: String,
    year: String,
    text: String,
    date: Date
}, {
    timestamps: true // This option enables the timestamps feature
})

const joinForm = mongoose.model('joinform', JoinUsSchema)
export default joinForm
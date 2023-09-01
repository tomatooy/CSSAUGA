import User from "../models/User.js"

/*
REGSITER
*/ 
export const register = async (req, res) =>{
    try{
        const {email, password} = req.body
        const newUser = new User({email, password})
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }
    catch(err){
        res.status(500).json({err: err.messsage})
    }
}


/*
LOGIN
*/ 
export const login = async (req, res) =>{
    try{
        const {email, password} = req.body
        const user = await User.findOne({email : email})
        if(!user){
            return res.status(400).json({msg : "User not exist"})
        }
        const isMatch = password == user.password
        console.log(user.password)
        if(!isMatch){
            return res.status(400).json({msg : "password incorrect"})
        }
        return res.status(200).json({user})
    }   
    catch(err){
        res.status(500).json({error : err.messsage})
    }
}
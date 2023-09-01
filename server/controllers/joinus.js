import joinForm from '../models/JoinForm.js'


export const saveForm = async (req, res) => {
    try {
        const { name, phone, major, year, text, email,date } = req.body
        const newForm = new joinForm({
            name, email, phone, major, year, text,date
        })
        await newForm.save()
        res.status(200).json(newForm)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
}
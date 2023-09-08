import joinForm from '../models/JoinForm.js'


export const saveForm = async (req, res) => {
    try {
        const { name, phone, major, year, text, email,date } = req.body
        const newForm = new joinForm({
            name, email, phone, major, year, text, date
        })
        await newForm.save()
        res.status(200).json(newForm)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
}

export const getForm = async (req, res) => {
    try {
        const forms = await joinForm.find({})
            .sort({ date: -1 }) // Sort by createdAt field in descending order (newest first)
        res.json(forms)
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}
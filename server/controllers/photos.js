import Photo from "../models/Photo.js"


export const addPhoto = async (req, res) => {

    try {
        const { url,height,width} = req.body
        const newPhoto = new Photo({
            url,height,width
        })
        await newPhoto.save()
        res.status(200).json(newPhoto)
    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
}


export const getPhoto= async (req, res) => {
    try {
        const photo = await Photo.find()
        res.json(photo)
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}

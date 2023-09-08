import Photo from "../models/Photo.js"


export const addPhoto = async (req, res) => {

    try {
        const { src,height,width} = req.body
        const newPhoto = new Photo({
            src,height,width
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

export const deletePhoto = async(req, res) => {
    try {
        const {_id}= req.query
        await Photo.findByIdAndRemove(_id)
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const Village = require('../Models/villageModel');


// get 
const getVillage = async (req, res) => {
    let { block_id } = req.headers;
    try {
        const village = await Village.findAll({ where: { block_id: block_id } })

        return res.status(200).send(village)

    } catch (error) {
        res.status(500).send(error.message)
    }
};

// Create 
const createVillage = async (req, res) => {
    let { name } = req.body
    try {
        if (!name) {
            return res.status(400).json({ message: " Field are require" })
        }
        const Name = await Village.findOne({ where: { name: name } })
        if (Name) {
            return res.status(400).json({ message: " Village is all ready Exist" })
        } else {
            const village = await Village.create(req.body)
            res.status(200).json({ message: "Create succesfully ", village: village })
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};
// Update
const updateVillage = async (req, res) => {
    let id = req.params.id
    try {
        const village = await Village.update(req.body, { where: { id: id } })
        return res.status(200).json({ message: "Village  succesfully  Update ", village: village })
    } catch (error) {
        return res.status(500).send(error.message)
    }

};
//delete
const deleteVillage = async (req, res) => {
    let id = req.params.id
    try {
        const village = await Village.destroy({ where: { id: id } })
        return res.status(200).json({ message: "Village  succesfully  delete ", village: village })
    } catch (error) {
        res.status(500).send(error.message)
    }

};

module.exports = {
    getVillage, createVillage, updateVillage, deleteVillage
}
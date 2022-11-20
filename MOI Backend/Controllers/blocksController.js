const block = require('../Models/blocksModel');


// get 
const getBlock = async (req, res) => {
    let { district_id } = req.headers;
    try {
        const Block = await block.findAll({ where: { district_id: district_id } })
        return res.status(200).send(Block)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

// Create 
const createBlock = async (req, res) => {
    let { name } = req.body
    try {
        if (!name) {
            return res.status(400).json({ message: " Field are require" })
        }
        const Name = await block.findOne({ where: { name: name } })
        if (Name) {
            return res.status(400).json({ message: " Block is all ready Exist" })
        } else {
            const Block = await block.create(req.body)
            return res.status(200).json({ message: "Create succesfully", Block: Block })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};
// Update
const updateBlock = async (req, res) => {
    let id = req.params.id
    try {
        const Block = await block.update(req.body, { where: { id: id } })
        return res.status(200).json({ message: "Block succesfully Update ", Block: Block })
    } catch (error) {
        res.status(500).send(error.message)
    }

};
//delete
const deleteBlock = async (req, res) => {
    let id = req.params.id
    try {
        const Block = await block.destroy({ where: { id: id } })
        return res.status(200).json({ message: "Block succesfully delete ", Block: Block })
    } catch (error) {
        res.status(500).send(error.message)
    }

};

module.exports = {
    getBlock, createBlock, updateBlock, deleteBlock
}
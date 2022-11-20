const State = require('../Models/stateModel');


// get 
const getState = async (req, res) => {
    try {
        const state = await State.findAll()
        return res.status(200).send(state)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

// Create 
const createState = async (req, res) => {
    try {
        let { name } = req.body
        if (!name) {
            return res.status(400).json({ message: " Field are require" })
        }
        const Name = await State.findOne({ where: { name: name } })
        if (Name) {
            return res.status(400).json({ message: " State is all ready Exist" })
        } else {

            const state = await State.create(req.body)
            return res.status(200).json({ message: "Create succesfully  ", state: state })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};
// Update
const updateState = async (req, res) => {
    let id = req.params.id
    try {
        const state = await State.update(req.body, { where: { id: id } })
        return res.status(200).json({ message: "Update succesfully  ", state: state })
    } catch (error) {
        res.status(500).send(error.message)
    }

};
//delete
const deleteState = async (req, res) => {
    let id = req.params.id
    try {
        const state = await State.destroy({ where: { id: id } })
        return res.status(200).json({ message: "delete succesfully  ", state: state })
    } catch (error) {
        res.status(500).send(error.message)
    }

};

module.exports = {
    getState, createState, updateState, deleteState
}
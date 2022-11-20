const user = require('../Models/UserModel');


// get 
const getUser = async (req, res) => {
    try {
        const User = await user.findAll()
        return res.send(User)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

// Create 
const createUser = async (req, res) => {
    try {
        const User = await user.create(req.body)
        return res.status(200).json({ message: "Create succesfully ", User: User })
    } catch (error) {
        return res.status(500).send(error.message)
    }
};
// Update
const updateUser = async (req, res) => {
    let id = req.params.id
    try {
        const User = await user.update(req.body, { where: { id: id } })
        return res.status(200).json({ message: "User  succesfully  Update ", User: User })
    } catch (error) {
        return res.status(500).send(error.message)
    }

};
//delete
const deleteUser = async (req, res) => {
    let id = req.params.user_id
    try {
        const User = await user.destroy({ where: { id: id } })
        return res.status(200).json({ message: "User  succesfully  delete ", User: User })
    } catch (error) {
        return res.status(500).send(error.message)
    }

};

module.exports = {
    getUser, createUser, updateUser, deleteUser
}
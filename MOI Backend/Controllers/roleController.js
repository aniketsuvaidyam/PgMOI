const role = require('../Models/roleModel');


// get 
const getRole = async (req, res) => {
    try {
        const Role = await role.findAll()
        res.send(Role)
    } catch (error) {
        res.status(500).send(error.message)
    }
};

// Create 
const createRole = async (req, res) => {
    try {
        const Role = await role.create(req.body)
        res.status(200).json({ message: "Create succesfully", Role: Role })
    } catch (error) {
        res.status(500).send(error.message)
    }
};
// Update
const updateRole = async (req, res) => {
    let id = req.params.id
    try {
        const Role = await role.update(req.body, { where: { id: id } })
        res.status(200).json({ message: "Update succesfully Role ", Role: Role })
    } catch (error) {
        res.status(500).send(error.message)
    }

};
//delete
const deleteRole = async (req, res) => {
    let id = req.params._id
    try {
        const Role = await role.destroy({ where: { id: id } })
        res.status(200).json({ message: "delete succesfully Role ", Role: Role })
    } catch (error) {
        res.status(500).send(error.message)
    }

};

module.exports = {
    getRole, createRole, updateRole, deleteRole
}
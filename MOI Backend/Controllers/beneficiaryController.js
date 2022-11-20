const Beneficiary = require('../Models/beneficiaryModel');


// get 
const getBeneficiary = async (req, res) => {
    let created_by = req.decoded.id
    console.log(created_by)
    try {

        const beneficary = await Beneficiary.findAll({ where: { created_by: created_by } })
        return res.send(beneficary)
    } catch (error) {
        res.status(500).send(error.message)
    }
};

// Create 
const createBeneficiary = async (req, res) => {
    const userId = req.decoded.id
    // console.log(created_by)
    try {
        let { state, district, village, block, name, username, email, mobile, address } = req.body
        if (!state || !district || !village || !block || !name || !username || !email || !mobile || !address) {
            return res.status(400).json({ message: "All field are require" })
        }
        const benefi = await Beneficiary.findOne({ where: { mobile: mobile, username: username, created_by: userId } })
        if (benefi) {
            res.status(400).json({ message: "Duplicate Beneficiary" })
        } else {

            const beneficary = await Beneficiary.create({ state, district, village, block, name, username, email, mobile, address, created_by: userId })
            return res.status(200).json({ message: "Create succesfully ", beneficary: beneficary })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};
// Update
const updateBeneficary = async (req, res) => {
    let id = req.params.id
    try {
        const beneficary = await Beneficiary.update(req.body, { where: { id: id } })
        return res.status(200).json({ message: "Update succesfully beneficary ", beneficary: beneficary })
    } catch (error) {
        return res.status(500).send(error.message)
    }

};
//delete
const deleteBeneficary = async (req, res) => {
    let id = req.params.id
    try {
        const beneficary = await Beneficiary.destroy({ where: { id: id } })
        return res.status(200).json({ message: "delete succesfully beneficary ", beneficary: beneficary })
    } catch (error) {
        return res.status(500).send(error.message)
    }

};

module.exports = {
    getBeneficiary, createBeneficiary, updateBeneficary, deleteBeneficary
}
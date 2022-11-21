const Distric = require("../Models/districtsModel");

// get
const getDistric = async (req, res) => {
  let { state_id } = req.headers;
  try {
    const distric = await Distric.findAll({ where: { state_id: state_id } });
    return res.status(200).send(distric);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Create
const createDistric = async (req, res) => {
  try {
    let { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: " Field are require" });
    }
    const Name = await Distric.findOne({ where: { name: name } });
    if (Name) {
      return res.status(400).json({ message: " District is all ready Exist" });
    } else {
      const distric = await Distric.create(req.body);
      return res
        .status(200)
        .json({ message: "Create succesfully ", distric: distric });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
// Update
const updateDistric = async (req, res) => {
  let id = req.params.id;
  try {
    const distric = await Distric.update(req.body, { where: { id: id } });
    return res
      .status(200)
      .json({ message: "Update succesfully ", distric: distric });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
//delete
const deleteDistric = async (req, res) => {
  let id = req.params.id;
  try {
    const distric = await Distric.destroy({ where: { id: id } });
    return res
      .status(200)
      .json({ message: "Delete succesfully  ", distric: distric });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getDistric,
  createDistric,
  updateDistric,
  deleteDistric,
};

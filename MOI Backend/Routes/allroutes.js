const { Router } = require("express");
const router = Router();
const Auth = require("../Auth/author");
const Role = require("../Controllers/roleController");
const Beneficiary = require("../Controllers/beneficiaryController");
const User = require("../Controllers/userController");
const States = require("../Controllers/stateControler");
const Distric = require("../Controllers/districtControler");
const Block = require("../Controllers/blocksController");
const Village = require("../Controllers/villageController");

// auth

router.post("/login", Auth.loginUser);

//Role
router.get("/role/all", Role.getRole);
router.post("/role/add", Role.createRole);
router.put("/role/:id", Role.updateRole);
router.delete("/role/:id", Role.deleteRole);
//verfy Token

router.use(Auth.verfyToken);

router.post("/register", Auth.registerUser);

// user routs
router.get("/user/all", User.getUser);
router.post("/user/add", User.createUser);
router.put("user/:id", User.updateUser);
router.delete("user/:id", User.deleteUser);

// state routes
router.get("/state/all", States.getState);
router.post("/state/add", States.createState);
router.put("/state/:id", States.updateState);
router.delete("/state/:id", States.deleteState);

//Distric routes
router.get("/district/all", Distric.getDistric);
router.post("/district/add", Distric.createDistric);
router.put("/district/:id", Distric.updateDistric);
router.delete("/district/:id", Distric.deleteDistric);

//Blocks routes
router.get("/block/all", Block.getBlock);
router.post("/block/add", Block.createBlock);
router.put("/block/:id", Block.updateBlock);
router.delete("/block/:id", Block.deleteBlock);

//Village routes
router.get("/village/all", Village.getVillage);
router.post("/village/add", Village.createVillage);
router.put("/village/:id", Village.updateVillage);
router.delete("/village/:id", Village.deleteVillage);

//Beneficiary
router.get("/beneficiry/all", Beneficiary.getBeneficiary);
router.post("/beneficiry/add", Beneficiary.createBeneficiary);
router.put("/beneficiry/:id", Beneficiary.updateBeneficary);
router.delete("/beneficiry/:id", Beneficiary.deleteBeneficary);

module.exports = router;

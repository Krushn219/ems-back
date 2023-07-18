const express = require("express");
const {
  createFamilyInfo,
  getAllFamilyInfo,
  getSingleFamilyInfo,
  updateFamilyInfo,
  deleteFamilyInfo,
} = require("../controller/FamilyInfoController");
const router = express.Router();

router.route("/create").post(createFamilyInfo);

router.route("/all").get(getAllFamilyInfo);

router.route("/:id").get(getSingleFamilyInfo);

router.route("/:id").put(updateFamilyInfo);

router.route("/:id").delete(deleteFamilyInfo);

module.exports = router;

const express = require("express");
const {
  createWorkExperience,
  getAllWorkExperience,
  getSingleWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
} = require("../controller/WorkExperienceController");
const router = express.Router();

router.route("/create").post(createWorkExperience);

router.route("/all").get(getAllWorkExperience);

router.route("/:id").get(getSingleWorkExperience);

router.route("/:id").put(updateWorkExperience);

router.route("/:id").delete(deleteWorkExperience);

module.exports = router;

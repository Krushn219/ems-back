const express = require("express");
const {
  createEducation,
  getAllEducation,
  getSingleEducation,
  updateEducation,
  deleteEducation,
} = require("../controller/EducationController");
const router = express.Router();

router.route("/create").post(createEducation);

router.route("/all").get(getAllEducation);

router.route("/:id").get(getSingleEducation);

router.route("/:id").put(updateEducation);

router.route("/:id").delete(deleteEducation);

module.exports = router;

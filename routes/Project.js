const express = require("express");
const {
  createProject,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controller/ProjectController");
const router = express.Router();

router.route("/create").post(createProject);

router.route("/all").get(getAllProject);

router.route("/:id").get(getSingleProject);

router.route("/:id").put(updateProject);

router.route("/:id").delete(deleteProject);

module.exports = router;

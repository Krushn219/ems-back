const express = require("express");
const {
  createDepartment,
  getAllDepartment,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controller/DepartmentController");
const router = express.Router();

router.route("/create").post(createDepartment);

router.route("/all").get(getAllDepartment);

router.route("/:id").get(getSingleDepartment);

router.route("/:id").put(updateDepartment);

router.route("/:id").delete(deleteDepartment);

module.exports = router;

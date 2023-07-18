const express = require("express");
const {
  createEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controller/EmployeeController");
const router = express.Router();

router.route("/create").post(createEmployee);

router.route("/all").get(getAllEmployee);

router.route("/:id").get(getSingleEmployee);

router.route("/:id").put(updateEmployee);

router.route("/:id").delete(deleteEmployee);

module.exports = router;

const express = require("express");
const {
  createSalary,
  getAllSalary,
  getSingleSalary,
  updateSalary,
  deleteSalary,
} = require("../controller/SalaryController");
const router = express.Router();

router.route("/create").post(createSalary);

router.route("/all").get(getAllSalary);

router.route("/:id").get(getSingleSalary);

router.route("/:id").put(updateSalary);

router.route("/:id").delete(deleteSalary);

module.exports = router;

const express = require("express");
const {
  createEmployeePresence,
  getAllEmployeePresence,
  getSingleEmployeePresence,
  updateEmployeePresence,
  deleteEmployeePresence,
  getAllEmployeePresenceByDate,
} = require("../controller/EmployeePresenceController");
const router = express.Router();

router.route("/create").post(createEmployeePresence);

router.route("/all").get(getAllEmployeePresence);

router.route("/date").get(getAllEmployeePresenceByDate);

router.route("/:id").get(getSingleEmployeePresence);

router.route("/:id").put(updateEmployeePresence);

router.route("/:id").delete(deleteEmployeePresence);

module.exports = router;

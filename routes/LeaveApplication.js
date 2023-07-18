const express = require("express");
const {
  createLeaveApplication,
  getAllLeaveApplication,
  getSingleLeaveApplication,
  updateLeaveApplication,
  deleteLeaveApplication,
} = require("../controller/LeaveApplicationController");
const router = express.Router();

router.route("/create").post(createLeaveApplication);

router.route("/all").get(getAllLeaveApplication);

router.route("/:id").get(getSingleLeaveApplication);

router.route("/:id").put(updateLeaveApplication);

router.route("/:id").delete(deleteLeaveApplication);

module.exports = router;

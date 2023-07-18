const express = require("express");
const {
  createRole,
  getAllRole,
  getSingleRole,
  updateRole,
  deleteRole,
} = require("../controller/RoleController");
const router = express.Router();

router.route("/create").post(createRole);

router.route("/all").get(getAllRole);

router.route("/:id").get(getSingleRole);

router.route("/:id").put(updateRole);

router.route("/:id").delete(deleteRole);

module.exports = router;

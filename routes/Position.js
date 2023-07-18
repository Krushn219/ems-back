const express = require("express");
const {
  createPosition,
  getAllPosition,
  getSinglePosition,
  updatePosition,
  deletePosition,
} = require("../controller/PositionController");
const router = express.Router();

router.route("/create").post(createPosition);

router.route("/all").get(getAllPosition);

router.route("/:id").get(getSinglePosition);

router.route("/:id").put(updatePosition);

router.route("/:id").delete(deletePosition);

module.exports = router;

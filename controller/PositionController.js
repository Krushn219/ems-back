const Position = require("../models/Position");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.createPosition = catchAsyncErrors(async (req, res, next) => {
  try {
    const position = await Position.create(req.body);

    return res.status(201).json({
      success: true,
      position,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getAllPosition = catchAsyncErrors(async (req, res, next) => {
  try {
    const resultPerPage = Number(req.query.limit);

    let totalPosition = await Position.countDocuments();
    const sort = {};

    if (req.query.sortBy && req.query.groupBy) {
      sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
    }

    const apiFeature = new ApiFeatures(Position.find().sort(sort), req.query)
      .filter()
      .search()
      .pagination(resultPerPage);
    let Positions = await apiFeature.query;
    let filteredPositionCount = Positions.length;

    return res.status(200).json({
      success: true,
      totalPosition: totalPosition,
      filteredPosition: filteredPositionCount,
      page: req.query.page,
      limit: resultPerPage,
      Positions,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getSinglePosition = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  console.log("id+++", id);
  try {
    const position = await Position.findById(id);
    if (!position) {
      return next(new ErrorHandler("Position not found", 404));
    }
    return res.status(200).json({
      success: true,
      position,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.updatePosition = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const position = await Position.findById(id);
  if (!position) {
    return next(new ErrorHandler("Position not found", 404));
  }
  try {
    const updatePosition = await Position.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      updatePosition,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.deletePosition = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const Position = await Position.findById(id);
  if (!Position) {
    return next(new ErrorHandler("Position not found", 404));
  }
  try {
    const Position = await Position.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      msg: "Deleted Successfully..",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

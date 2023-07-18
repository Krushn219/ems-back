const Education = require("../models/Education");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.createEducation = catchAsyncErrors(async (req, res, next) => {
  try {
    const education = await Education.create(req.body);

    if (!education) {
      return res.status(404).json({
        success: false,
        msg: "Cannot Create Education..",
      });
    }

    return res.status(201).json({
      success: true,
      education,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getAllEducation = catchAsyncErrors(async (req, res, next) => {
  try {
    const resultPerPage = Number(req.query.limit);

    let totalEducation = await Education.countDocuments();
    const sort = {};

    if (req.query.sortBy && req.query.groupBy) {
      sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
    }

    const apiFeature = new ApiFeatures(Education.find().sort(sort), req.query)
      .filter()
      .search()
      .pagination(resultPerPage);
    let education = await apiFeature.query;
    let filteredEducationCount = education.length;

    return res.status(200).json({
      success: true,
      totalEducation: totalEducation,
      filteredEducation: filteredEducationCount,
      page: req.query.page,
      limit: resultPerPage,
      education,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getSingleEducation = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  try {
    const education = await Education.findById(id);
    if (!education) {
      return res.status(404).json({
        success: false,
        msg: "Education not found",
      });
      return next(new ErrorHandler("Education not found", 404));
    }
    return res.status(200).json({
      success: true,
      education,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.updateEducation = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const education = await Education.findById(id);
  if (!education) {
    return res.status(404).json({
      success: false,
      msg: "Education not found",
    });
    return next(new ErrorHandler("Education not found", 404));
  }
  try {
    const updateEducation = await Education.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      updateEducation,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.deleteEducation = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const education = await Education.findById(id);
  if (!education) {
    return res.status(404).json({
      success: false,
      msg: "Education not found",
    });
    return next(new ErrorHandler("Education not found", 404));
  }
  try {
    const data = await Education.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      msg: "Deleted Successfully..",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

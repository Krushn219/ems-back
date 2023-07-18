const FamilyInfo = require("../models/Family");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.createFamilyInfo = catchAsyncErrors(async (req, res, next) => {
  try {
    const familyInfo = await FamilyInfo.create(req.body);

    if (!familyInfo) {
      return res.status(404).json({
        success: false,
        msg: "Cannot Create FamilyInfo..",
      });
    }

    return res.status(201).json({
      success: true,
      familyInfo,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getAllFamilyInfo = catchAsyncErrors(async (req, res, next) => {
  try {
    const resultPerPage = Number(req.query.limit);

    let totalFamilyInfo = await FamilyInfo.countDocuments();
    const sort = {};

    if (req.query.sortBy && req.query.groupBy) {
      sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
    }

    const apiFeature = new ApiFeatures(FamilyInfo.find().sort(sort), req.query)
      .filter()
      .search()
      .pagination(resultPerPage);
    let familyInfo = await apiFeature.query;
    let filteredFamilyInfoCount = familyInfo.length;

    return res.status(200).json({
      success: true,
      totalFamilyInfo: totalFamilyInfo,
      filteredFamilyInfo: filteredFamilyInfoCount,
      page: req.query.page,
      limit: resultPerPage,
      familyInfo,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getSingleFamilyInfo = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;
    try {
      const familyInfo = await FamilyInfo.findById(id);
      if (!familyInfo) {
        return res.status(404).json({
          success: false,
          msg: "FamilyInfo not found",
        });
        return next(new ErrorHandler("FamilyInfo not found", 404));
      }
      return res.status(200).json({
        success: true,
        familyInfo,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.updateFamilyInfo = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const familyInfo = await FamilyInfo.findById(id);
  if (!familyInfo) {
    return res.status(404).json({
      success: false,
      msg: "FamilyInfo not found",
    });
    return next(new ErrorHandler("FamilyInfo not found", 404));
  }
  try {
    const updateFamilyInfo = await FamilyInfo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      updateFamilyInfo,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.deleteFamilyInfo = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const familyInfo = await FamilyInfo.findById(id);
  if (!familyInfo) {
    return res.status(404).json({
      success: false,
      msg: "FamilyInfo not found",
    });
    return next(new ErrorHandler("FamilyInfo not found", 404));
  }
  try {
    const data = await FamilyInfo.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      msg: "Deleted Successfully..",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

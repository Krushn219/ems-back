const Department = require("../models/Department");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.createDepartment = catchAsyncErrors(async (req, res, next) => {
  try {
    const department = await Department.create(req.body);

    return res.status(201).json({
      success: true,
      department,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getAllDepartment = catchAsyncErrors(async (req, res, next) => {
  try {
    const resultPerPage = Number(req.query.limit);

    let totalDepartment = await Department.countDocuments();
    const sort = {};

    if (req.query.sortBy && req.query.groupBy) {
      sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
    }

    const apiFeature = new ApiFeatures(Department.find().sort(sort), req.query)
      .filter()
      .search()
      .pagination(resultPerPage);
    let departments = await apiFeature.query;
    let filteredDepartmentCount = departments.length;

    return res.status(200).json({
      success: true,
      totalDepartment: totalDepartment,
      filteredDepartment: filteredDepartmentCount,
      page: req.query.page,
      limit: resultPerPage,
      departments,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getSingleDepartment = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;
    console.log("id+++", id);
    try {
      const department = await Department.findById(id);
      if (!department) {
        return next(new ErrorHandler("Department not found", 404));
      }
      return res.status(200).json({
        success: true,
        department,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.updateDepartment = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const department = await Department.findById(id);
  if (!department) {
    return res.status(404).json({
      success: false,
      msg: "Department not found",
    });
    return next(new ErrorHandler("Department not found", 404));
  }
  try {
    const updateDepartment = await Department.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      updateDepartment,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.deleteDepartment = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const department = await Department.findById(id);
  if (!department) {
    return res.status(404).json({
      success: false,
      msg: "Department not found",
    });
    return next(new ErrorHandler("Department not found", 404));
  }
  try {
    const data = await Department.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      msg: "Deleted Successfully..",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

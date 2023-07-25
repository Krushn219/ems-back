const Salary = require("../models/Salary");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.createSalary = catchAsyncErrors(async (req, res, next) => {
  try {
    const salary = await Salary.create(req.body);

    if (!salary) {
      return res.status(404).json({
        success: false,
        msg: "Cannot Create Salary..",
      });
    }

    return res.status(201).json({
      success: true,
      salary,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getAllSalary = catchAsyncErrors(async (req, res, next) => {
  try {
    const resultPerPage = Number(req.query.limit);

    let totalSalary = await Salary.countDocuments();
    const sort = {};

    if (req.query.sortBy && req.query.groupBy) {
      sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
    }

    const apiFeature = new ApiFeatures(
      Salary.find()
        .populate("Employee", "FirstName MiddleName LastName")
        .sort(sort),
      req.query
    )
      .filter()
      .search()
      .pagination(resultPerPage);
    let salary = await apiFeature.query;
    let filteredSalaryCount = salary.length;

    return res.status(200).json({
      success: true,
      totalSalary: totalSalary,
      filteredSalary: filteredSalaryCount,
      page: req.query.page,
      limit: resultPerPage,
      salary,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getSingleSalary = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  try {
    const salary = await Salary.findById(id);
    if (!salary) {
      return res.status(404).json({
        success: false,
        msg: "Salary not found",
      });
      return next(new ErrorHandler("Salary not found", 404));
    }
    return res.status(200).json({
      success: true,
      salary,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.updateSalary = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const salary = await Salary.findById(id);
  if (!salary) {
    return res.status(404).json({
      success: false,
      msg: "Salary not found",
    });
    return next(new ErrorHandler("Salary not found", 404));
  }
  try {
    const updateSalary = await Salary.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      updateSalary,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.deleteSalary = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const salary = await Salary.findById(id);
  if (!salary) {
    return res.status(404).json({
      success: false,
      msg: "Salary not found",
    });
    return next(new ErrorHandler("Salary not found", 404));
  }
  try {
    const data = await Salary.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      msg: "Deleted Successfully..",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

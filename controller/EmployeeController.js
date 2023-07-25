const Employee = require("../models/Employee");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const EmployeePresence = require("../models/EmployeePresence");

module.exports.createEmployee = catchAsyncErrors(async (req, res, next) => {
  try {
    const isExisted = await Employee.findOne({ Email: req.body.Email });
    if (isExisted) {
      return res.status(400).json({
        success: false,
        msg: "User Already Existed with this Email...",
      });
    }
    const employee = await Employee.create(req.body);

    if (!employee) {
      return res.status(404).json({
        success: false,
        msg: "Can't Create Employee..",
      });
    }

    return res.status(201).json({
      success: true,
      employee,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getAllEmployee = catchAsyncErrors(async (req, res, next) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedToday = `${year}-${month}-${day}`;
  try {
    const resultPerPage = Number(req.query.limit);

    let totalEmployee = await Employee.countDocuments();
    const sort = {};

    if (req.query.sortBy && req.query.groupBy) {
      sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
    }

    const apiFeature = new ApiFeatures(Employee.find().sort(sort), req.query)
      .filter()
      .search()
      .pagination(resultPerPage);
    let employee = await apiFeature.query;
    let filteredEmployeeCount = employee.length;

    return res.status(200).json({
      success: true,
      totalEmployee: totalEmployee,
      filteredEmployee: filteredEmployeeCount,
      page: req.query.page,
      limit: resultPerPage,
      employee,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getSingleEmployee = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({
        success: false,
        msg: "Employee not found",
      });
      return next(new ErrorHandler("Employee not found", 404));
    }
    return res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.updateEmployee = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const employee = await Employee.findById(id);
  if (!employee) {
    return res.status(404).json({
      success: false,
      msg: "Employee not found",
    });
    return next(new ErrorHandler("Employee not found", 404));
  }
  try {
    const updateEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      updateEmployee,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.deleteEmployee = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const employee = await Employee.findById(id);
  if (!employee) {
    return res.status(404).json({
      success: false,
      msg: "Employee not found",
    });
    return next(new ErrorHandler("Employee not found", 404));
  }
  try {
    const data = await Employee.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      msg: "Deleted Successfully..",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

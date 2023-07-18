const Role = require("../models/Role");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.createRole = catchAsyncErrors(async (req, res, next) => {
  try {
    const role = await Role.create(req.body);

    return res.status(201).json({
      success: true,
      role,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getAllRole = catchAsyncErrors(async (req, res, next) => {
  try {
    const resultPerPage = Number(req.query.limit);

    let totalRole = await Role.countDocuments();
    const sort = {};

    if (req.query.sortBy && req.query.groupBy) {
      sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
    }

    const apiFeature = new ApiFeatures(Role.find().sort(sort), req.query)
      .filter()
      .search()
      .pagination(resultPerPage);
    let roles = await apiFeature.query;
    let filteredRoleCount = roles.length;

    return res.status(200).json({
      success: true,
      totalRole: totalRole,
      filteredRole: filteredRoleCount,
      page: req.query.page,
      limit: resultPerPage,
      roles,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getSingleRole = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  console.log("id+++", id);
  try {
    const role = await Role.findById(id);
    if (!role) {
      return next(new ErrorHandler("Role not found", 404));
    }
    return res.status(200).json({
      success: true,
      role,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.updateRole = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const role = await Role.findById(id);
  if (!role) {
    return next(new ErrorHandler("Role not found", 404));
  }
  try {
    const updateRole = await Role.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      updateRole,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.deleteRole = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const role = await Role.findById(id);
  if (!role) {
    return next(new ErrorHandler("Role not found", 404));
  }
  try {
    const role = await Role.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      msg: "Deleted Successfully..",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

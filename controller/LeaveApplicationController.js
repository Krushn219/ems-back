const LeaveApplication = require("../models/LeaveApplication");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.createLeaveApplication = catchAsyncErrors(
  async (req, res, next) => {
    try {
      const leaveApplication = await LeaveApplication.create(req.body);

      if (!leaveApplication) {
        return res.status(404).json({
          success: false,
          msg: "Can't Create LeaveApplication..",
        });
      }

      return res.status(201).json({
        success: true,
        leaveApplication,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.getAllLeaveApplication = catchAsyncErrors(
  async (req, res, next) => {
    try {
      const resultPerPage = Number(req.query.limit);

      let totalLeaveApplication = await LeaveApplication.countDocuments();
      const sort = {};

      if (req.query.sortBy && req.query.groupBy) {
        sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
      }

      const apiFeature = new ApiFeatures(
        LeaveApplication.find().sort(sort),
        req.query
      )
        .filter()
        .search()
        .pagination(resultPerPage);
      let leaveApplication = await apiFeature.query;
      let filteredLeaveApplicationCount = leaveApplication.length;

      return res.status(200).json({
        success: true,
        totalLeaveApplication: totalLeaveApplication,
        filteredLeaveApplication: filteredLeaveApplicationCount,
        page: req.query.page,
        limit: resultPerPage,
        leaveApplication,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.getSingleLeaveApplication = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;
    try {
      const leaveApplication = await LeaveApplication.findById(id);
      if (!leaveApplication) {
        return res.status(404).json({
          success: false,
          msg: "LeaveApplication not found",
        });
        return next(new ErrorHandler("LeaveApplication not found", 404));
      }
      return res.status(200).json({
        success: true,
        leaveApplication,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.updateLeaveApplication = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;

    const leaveApplication = await LeaveApplication.findById(id);
    if (!leaveApplication) {
      return res.status(404).json({
        success: false,
        msg: "LeaveApplication not found",
      });
      return next(new ErrorHandler("LeaveApplication not found", 404));
    }
    try {
      const updateLeaveApplication = await LeaveApplication.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        }
      );

      return res.status(200).json({
        success: true,
        updateLeaveApplication,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.deleteLeaveApplication = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;
    const leaveApplication = await LeaveApplication.findById(id);
    if (!leaveApplication) {
      return res.status(404).json({
        success: false,
        msg: "LeaveApplication not found",
      });
      return next(new ErrorHandler("LeaveApplication not found", 404));
    }
    try {
      const data = await LeaveApplication.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        msg: "Deleted Successfully..",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

const EmployeePresence = require("../models/EmployeePresence");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
var moment = require("moment-timezone");

module.exports.createEmployeePresence = catchAsyncErrors(
  async (req, res, next) => {
    // const date = moment(req.body.date + "Z")
    //   .tz("GMT")
    //   .format("YYYY-MM-DD");

    // https://www.mongodb.com/community/forums/t/save-date-of-birth-of-user-without-timezone/9155

    const date = req.body.date + "Z";

    try {
      const employeePresence = await EmployeePresence.create({
        EmployeeName: req.body.EmployeeName,
        EmployeeID: req.body.EmployeeID,
        "presence.date": date,
        "presence.present": req.body.present,
      });

      if (!employeePresence) {
        return res.status(404).json({
          success: false,
          msg: "Can't Create EmployeePresence..",
        });
      }

      return res.status(201).json({
        success: true,
        employeePresence,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.getAllEmployeePresence = catchAsyncErrors(
  async (req, res, next) => {
    try {
      const resultPerPage = Number(req.query.limit);

      let totalEmployeePresence = await EmployeePresence.countDocuments();
      const sort = {};

      if (req.query.sortBy && req.query.groupBy) {
        sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
      }

      const apiFeature = new ApiFeatures(
        EmployeePresence.find().sort(sort),
        req.query
      )
        .filter()
        .search()
        .pagination(resultPerPage);
      let employeePresence = await apiFeature.query;
      let filteredEmployeePresenceCount = employeePresence.length;

      return res.status(200).json({
        success: true,
        totalEmployeePresence: totalEmployeePresence,
        filteredEmployeePresence: filteredEmployeePresenceCount,
        page: req.query.page,
        limit: resultPerPage,
        employeePresence,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.getSingleEmployeePresence = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;
    try {
      const employeePresence = await EmployeePresence.findById(id);
      if (!employeePresence) {
        return res.status(404).json({
          success: false,
          msg: "EmployeePresence not found",
        });
        return next(new ErrorHandler("EmployeePresence not found", 404));
      }
      return res.status(200).json({
        success: true,
        employeePresence,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.updateEmployeePresence = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;

    const employeePresence = await EmployeePresence.findById(id);
    if (!employeePresence) {
      return res.status(404).json({
        success: false,
        msg: "EmployeePresence not found",
      });
      return next(new ErrorHandler("EmployeePresence not found", 404));
    }
    try {
      const updateEmployeePresence = await EmployeePresence.findByIdAndUpdate(
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
        updateEmployeePresence,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.deleteEmployeePresence = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;
    const employeePresence = await EmployeePresence.findById(id);
    if (!employeePresence) {
      return res.status(404).json({
        success: false,
        msg: "EmployeePresence not found",
      });
      return next(new ErrorHandler("EmployeePresence not found", 404));
    }
    try {
      const data = await EmployeePresence.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        msg: "Deleted Successfully..",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

const WorkExperience = require("../models/WorkExperience");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.createWorkExperience = catchAsyncErrors(
  async (req, res, next) => {
    try {
      // var FromDate = Date.parse(req.body.FromDate);
      // var ToDate = Date.parse(req.body.ToDate);
      // const workExperience = await WorkExperience.create({
      //   CompanyName: req.body.CompanyName,
      //   Designation: req.body.Designation,
      //   FromDate: FromDate,
      //   ToDate: ToDate,
      // });

      const workExperience = await WorkExperience.create(req.body);

      if (!workExperience) {
        return res.status(404).json({
          success: false,
          msg: "Can't Create WorkExperience..",
        });
      }

      return res.status(201).json({
        success: true,
        workExperience,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.getAllWorkExperience = catchAsyncErrors(
  async (req, res, next) => {
    try {
      const resultPerPage = Number(req.query.limit);

      let totalWorkExperience = await WorkExperience.countDocuments();
      const sort = {};

      if (req.query.sortBy && req.query.groupBy) {
        sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
      }

      const apiFeature = new ApiFeatures(
        WorkExperience.find().sort(sort),
        req.query
      )
        .filter()
        .search()
        .pagination(resultPerPage);
      let workExperience = await apiFeature.query;
      let filteredWorkExperienceCount = workExperience.length;

      return res.status(200).json({
        success: true,
        totalWorkExperience: totalWorkExperience,
        filteredWorkExperience: filteredWorkExperienceCount,
        page: req.query.page,
        limit: resultPerPage,
        workExperience,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.getSingleWorkExperience = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;
    try {
      const workExperience = await WorkExperience.findById(id);
      if (!workExperience) {
        return res.status(404).json({
          success: false,
          msg: "WorkExperience not found",
        });
        return next(new ErrorHandler("WorkExperience not found", 404));
      }
      return res.status(200).json({
        success: true,
        workExperience,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.updateWorkExperience = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;

    const workExperience = await WorkExperience.findById(id);
    if (!workExperience) {
      return res.status(404).json({
        success: false,
        msg: "WorkExperience not found",
      });
      return next(new ErrorHandler("WorkExperience not found", 404));
    }
    try {
      const updateWorkExperience = await WorkExperience.findByIdAndUpdate(
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
        updateWorkExperience,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

module.exports.deleteWorkExperience = catchAsyncErrors(
  async (req, res, next) => {
    const id = req.params.id;
    const workExperience = await WorkExperience.findById(id);
    if (!workExperience) {
      return res.status(404).json({
        success: false,
        msg: "WorkExperience not found",
      });
      return next(new ErrorHandler("WorkExperience not found", 404));
    }
    try {
      const data = await WorkExperience.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        msg: "Deleted Successfully..",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

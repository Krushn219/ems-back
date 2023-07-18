const Project = require("../models/Project");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.createProject = catchAsyncErrors(async (req, res, next) => {
  try {
    const project = await Project.create(req.body);

    if (!project) {
      return res.status(404).json({
        success: false,
        msg: "Cannot Create Project..",
      });
    }

    return res.status(201).json({
      success: true,
      project,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getAllProject = catchAsyncErrors(async (req, res, next) => {
  try {
    const resultPerPage = Number(req.query.limit);

    let totalProject = await Project.countDocuments();
    const sort = {};

    if (req.query.sortBy && req.query.groupBy) {
      sort[req.query.sortBy] = req.query.groupBy === "desc" ? -1 : 1;
    }

    const apiFeature = new ApiFeatures(Project.find().sort(sort), req.query)
      .filter()
      .search()
      .pagination(resultPerPage);
    let project = await apiFeature.query;
    let filteredProjectCount = project.length;

    return res.status(200).json({
      success: true,
      totalProject: totalProject,
      filteredProject: filteredProjectCount,
      page: req.query.page,
      limit: resultPerPage,
      project,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.getSingleProject = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        msg: "Project not found",
      });
      return next(new ErrorHandler("Project not found", 404));
    }
    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.updateProject = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const project = await Project.findById(id);
  if (!project) {
    return res.status(404).json({
      success: false,
      msg: "Project not found",
    });
    return next(new ErrorHandler("Project not found", 404));
  }
  try {
    const updateProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      updateProject,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

module.exports.deleteProject = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const project = await Project.findById(id);
  if (!Project) {
    return res.status(404).json({
      success: false,
      msg: "Project not found",
    });
    return next(new ErrorHandler("Project not found", 404));
  }
  try {
    const data = await Project.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      msg: "Deleted Successfully..",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
});

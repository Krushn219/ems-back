const EmployeePresence = require("../models/EmployeePresence");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
var moment = require("moment-timezone");
const Employee = require("../models/Employee");

module.exports.createEmployeePresence = catchAsyncErrors(
  async (req, res, next) => {
    // const date = moment(req.body.date + "Z")
    //   .tz("GMT")
    //   .format("YYYY-MM-DD");

    // https://www.mongodb.com/community/forums/t/save-date-of-birth-of-user-without-timezone/9155

    // const date = req.body.date + "Z";
    // const date = req.body.date;

    try {
      const isExisted = await EmployeePresence.findOne({
        EmployeeID: req.body.EmployeeID,
        date: req.body.date,
        present: req.body.present,
      });

      console.log("isExisted+++", isExisted);
      if (isExisted) {
        return res.status(404).json({
          success: false,
          msg: "Already Create EmployeePresence..",
        });
      }
      const employeePresence = await EmployeePresence.create({
        EmployeeName: req.body.EmployeeName,
        EmployeeID: req.body.EmployeeID,
        date: req.body.date,
        present: req.body.present,
        workHours: req.body.workingHours,
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

// module.exports.createEmployeePresence = catchAsyncErrors(
//   async (req, res, next) => {
//     const selectedDate = req.body.date + "T00:00:00.000Z";

//     try {
//       const employees = await Employee.find();
//       console.log("selectedDate+++", selectedDate + "T00:00:00.000Z");

//       for (const employee of employees) {
//         // Check if presence data for the employee and selected date already exists
//         const existingPresenceData = await EmployeePresence.findOne({
//           EmployeeID: employee._id,
//           "presence.date": selectedDate,
//         });
//         console.log("existingPresenceData+++", existingPresenceData);

//         if (!existingPresenceData) {
//           // Presence data does not exist, create new entry
//           const presenceData = {
//             EmployeeName: employee.FirstName,
//             EmployeeID: employee._id,
//             date: selectedDate,
//             present: true,
//           };

//           await EmployeePresence.create(presenceData);
//         } else {
//           // Presence data already exists, you can choose to update it if needed
//           // For example, if you want to update the "present" field, you can do:
//           existingPresenceData.present = true;
//           await existingPresenceData.save();
//         }
//       }

//       return res.status(201).json({
//         success: true,
//         msg: `Present data created for all employees on ${selectedDate}.`,
//       });
//     } catch (error) {
//       return next(new ErrorHandler(error.message, 404));
//     }
//   }
// );

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

module.exports.getAllEmployeePresenceByDate = catchAsyncErrors(
  async (req, res, next) => {
    console.log("req.body+++", req.body);
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

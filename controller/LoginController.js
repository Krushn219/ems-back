const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Employee = require("../models/Employee");
const jwt = require("jsonwebtoken");
let jwtKey = process.env.JWTKEY;

module.exports.LogIn = catchAsyncErrors(async (req, res, next) => {

  try {
    await Employee.findOne(
      { Email: req.body.email },
      "Password _id Account FirstName LastName",
      function (err, document) {
        if (err || document == null) {
          res.send("false");
        } else {
          if (document.Password == req.body.password) {
            emp = {
              _id: document._id,
              Account: document.Account,
              FirstName: document.FirstName,
              LastName: document.LastName,
            };
            var token = jwt.sign(emp, jwtKey);
            res.send(token);
          } else {
            res.sendStatus(400);
          }
        }
      }
    );
  } catch (error) {}
});
// module.exports.LogIn = catchAsyncErrors(async (req, res, next) => {
//   var arr = [
//     {
//       name: "s1",
//       subject: [
//         {
//           subject: "math",
//           total: 83,
//         },
//         {
//           subject: "sci",
//           total: 87,
//         },
//         {
//           subject: "eng",
//           total: 85,
//         },
//       ],
//     },
//     {
//       name: "s2",
//       subject: [
//         {
//           subject: "math",
//           total: 75,
//         },
//         {
//           subject: "sci",
//           total: 69,
//         },
//         {
//           subject: "eng",
//           total: 87,
//         },
//       ],
//     },
//     {
//       name: "s3",
//       subject: [
//         {
//           subject: "math",
//           total: 89,
//         },
//         {
//           subject: "sci",
//           total: 92,
//         },
//         {
//           subject: "eng",
//           total: 92,
//         },
//       ],
//     },
//   ];
//   try {
//     mathMarks = [];
//     sciMarks = [];
//     engMarks = [];
//     totalMarks = [];
//     mathTotal = arr.forEach((student) => {
//       student.subject.forEach((subject) => {
//         totalMarks.push(subject.total);
//         if (subject.subject == "math") {
//           mathMarks.push(subject.total);
//         }
//         if (subject.subject == "sci") {
//           sciMarks.push(subject.total);
//         }
//         if (subject.subject == "eng") {
//           engMarks.push(subject.total);
//         }
//       });
//     });
//     console.log("mathMarks+++++", mathMarks.reduce(getSum, 0));
//     console.log("sciMarks+++++", sciMarks.reduce(getSum, 0));
//     console.log("engMarks+++++", engMarks.reduce(getSum, 0));
//     console.log("totalMarks+++++", totalMarks.reduce(getSum, 0));

//     function getSum(total, num) {
//       return total + Math.round(num);
//     }
//   } catch (error) {}
// });

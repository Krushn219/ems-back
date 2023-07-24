// app.p;
// // app.get("/api/role", verifyAdminHR, (req, res) => {
// //   Role.find()
// //     .populate("company")
// //     .exec(function (err, role) {
// //       res.send(role);
// //     });
// // });

// // app.post("/api/role", verifyAdminHR, (req, res) => {
// //   Joi.validate(req.body, RoleValidation, (err, result) => {
// //     if (err) {
// //       console.log(err);
// //       res.status(400).send(err.details[0].message);
// //     } else {
// //       let newRole;

// //       newRole = {
// //         RoleName: req.body.RoleName,
// //         company: req.body.CompanyID,
// //       };

// //       Role.create(newRole, function (err, role) {
// //         if (err) {
// //           console.log(err);
// //           res.send("error");
// //         } else {
// //           res.send(role);
// //           console.log("new Role Saved");
// //         }
// //       });
// //       // }
// //       console.log(req.body);
// //     }
// //   });
// // });

// // app.put("/api/role/:id", verifyAdminHR, (req, res) => {
// //   Joi.validate(req.body, RoleValidation, (err, result) => {
// //     if (err) {
// //       console.log(err);
// //       res.status(400).send(err.details[0].message);
// //     } else {
// //       let updateRole;

// //       updateRole = {
// //         RoleName: req.body.RoleName,
// //         company: req.body.CompanyID,
// //       };

// //       Role.findByIdAndUpdate(req.params.id, updateRole, function (err, role) {
// //         if (err) {
// //           res.send("error");
// //         } else {
// //           res.send(updateRole);
// //         }
// //       });
// //     }

// //     console.log("put");
// //     console.log(req.body);
// //   });
// // });
// // app.delete("/api/role/:id", verifyAdminHR, (req, res) => {
// //   Employee.find({ role: req.params.id }, function (err, r) {
// //     if (err) {
// //       console.log(err);
// //       res.send(err);
// //     } else {
// //       if (r.length == 0) {
// //         Role.findByIdAndRemove({ _id: req.params.id }, function (err, role) {
// //           if (!err) {
// //             console.log(" Role deleted");
// //             res.send(role);
// //           } else {
// //             console.log("error");
// //             res.send("err");
// //           }
// //         });
// //         console.log("delete");
// //         console.log(req.params.id);
// //       } else {
// //         res
// //           .status(403)
// //           .send(
// //             "This role is associated with Employee so you can not delete this"
// //           );
// //       }
// //     }
// //   });
// // });

// app.get("/api/position", verifyAdminHR, (req, res) => {
//   Position.find()
//     .populate("company")
//     .exec(function (err, role) {
//       res.send(role);
//     });
// });

// app.post("/api/position", verifyAdminHR, (req, res) => {
//   Joi.validate(req.body, PositionValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newPosition;

//       newPosition = {
//         PositionName: req.body.PositionName,
//         company: req.body.CompanyID,
//       };

//       Position.create(newPosition, function (err, position) {
//         if (err) {
//           console.log(err);
//           res.send("error");
//         } else {
//           res.send(position);
//           console.log("new Role Saved");
//         }
//       });
//     }
//     console.log(req.body);
//   });
// });
// app.put("/api/position/:id", verifyAdminHR, (req, res) => {
//   Joi.validate(req.body, PositionValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let updatePosition;

//       updatePosition = {
//         PositionName: req.body.PositionName,
//         company: req.body.CompanyID,
//       };

//       Position.findByIdAndUpdate(
//         req.params.id,
//         updatePosition,
//         function (err, position) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(updatePosition);
//           }
//         }
//       );
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/position/:id", verifyAdminHR, (req, res) => {
//   Employee.find({ position: req.params.id }, function (err, p) {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     } else {
//       if (p.length == 0) {
//         Position.findByIdAndRemove(
//           { _id: req.params.id },
//           function (err, position) {
//             if (!err) {
//               console.log("position deleted");
//               res.send(position);
//               // });
//               console.log("new Position Saved");
//             } else {
//               console.log("error");
//               res.send("err");
//             }
//           }
//         );
//         console.log("delete");
//         console.log(req.params.id);
//       } else {
//         res
//           .status(403)
//           .send(
//             "This Position is associated with Employee so you can not delete this"
//           );
//       }
//     }
//   });
// });

// //Department
// app.get("/api/department", verifyAdminHR, (req, res) => {
//   Department.find()
//     .populate("company")
//     .exec(function (err, employees) {
//       res.send(employees);
//     });
// });
// app.post("/api/department", verifyAdminHR, (req, res) => {
//   Joi.validate(req.body, DepartmentValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newDepartment;

//       newDepartment = {
//         DepartmentName: req.body.DepartmentName,
//         company: req.body.CompanyID,
//       };

//       Department.create(newDepartment, function (err, department) {
//         if (err) {
//           console.log(err);
//           res.send("error");
//         } else {
//           res.send(department);
//           console.log("new Role Saved");
//         }
//       });
//     }
//     console.log(req.body);
//   });
// });
// app.put("/api/department/:id", verifyAdminHR, (req, res) => {
//   Joi.validate(req.body, DepartmentValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let updateDepartment;

//       updateDepartment = {
//         DepartmentName: req.body.DepartmentName,
//         company: req.body.CompanyID,
//       };

//       Department.findByIdAndUpdate(
//         req.params.id,
//         updateDepartment,
//         function (err, department) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(updateDepartment);
//           }
//         }
//       );
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/department/:id", verifyAdminHR, (req, res) => {
//   Employee.find({ department: req.params.id }, function (err, d) {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     } else {
//       if (d.length == 0) {
//         Department.findByIdAndRemove(
//           { _id: req.params.id },
//           function (err, department) {
//             if (!err) {
//               console.log("department deleted");
//               res.send(department);
//               // });
//               console.log("new Department Saved");
//             } else {
//               console.log("error");
//               res.send("err");
//             }
//           }
//         );
//         console.log("delete");
//         console.log(req.params.id);
//       } else {
//         res
//           .status(403)
//           .send(
//             "This department is associated with Employee so you can not delete this"
//           );
//       }
//     }
//   });
// });

// app.get("/api/admin/portal", verifyAdmin, (req, res) => {
//   Portal.find()
//     .populate({ path: "projects" })
//     .exec(function (err, portalData) {
//       if (err) {
//         res.send("err");
//         console.log(err);
//       }
//       res.send(portalData);
//     });
// });

// app.post("/api/admin/portal", verifyAdmin, (req, res) => {
//   Joi.validate(req.body, PortalValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newPortal;
//       newPortal = {
//         PortalName: req.body.PortalName,
//         Status: req.body.Status,
//       };

//       Portal.create(newPortal, function (err, portalData) {
//         if (err) {
//           console.log(err);
//           res.send("error");
//         } else {
//           res.send(portalData);
//           console.log("new Portal Saved");
//         }
//       });
//       console.log(req.body);
//     }
//   });
// });

// app.put("/api/admin/portal/:id", verifyAdmin, (req, res) => {
//   Joi.validate(req.body, PortalValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let updatePortal;
//       updatePortal = {
//         PortalName: req.body.PortalName,
//         Status: req.body.Status,
//       };
//       Portal.findByIdAndUpdate(
//         req.body._id,
//         updatePortal,
//         function (err, Portal) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(updatePortal);
//           }
//         }
//       );
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/admin/portal/:id", verifyAdmin, (req, res) => {
//   Portal.findByIdAndRemove({ _id: req.params.id }, function (err, portal) {
//     if (!err) {
//       console.log("portal deleted");
//       res.send(portal);
//       Project.deleteMany({ portals: { _id: portal._id } }, function (err) {
//         if (err) {
//           res.send("error");
//           console.log(err);
//         }
//       });
//       console.log("new Portal Saved");
//     } else {
//       console.log("error");
//       res.send("err");
//     }
//   });
//   console.log("delete");
//   console.log(req.params.id);
// });

// ///*********bid */

// app.get("/api/admin/project-bid", verifyAdmin, (req, res) => {
//   // var employee = {};

//   Project.find()
//     .populate("portals")
//     .exec(function (err, project) {
//       if (err) {
//         console.log(err);
//         res.send("err");
//       } else {
//         res.send(project);
//       }
//     });
// });

// app.post("/api/admin/project-bid", verifyAdmin, (req, res) => {
//   Joi.validate(req.body, ProjectValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let project;
//       project = {
//         ProjectTitle: req.body.ProjectTitle,
//         ProjectURL: req.body.ProjectURL,
//         ProjectDesc: req.body.ProjectDesc,
//         portals: req.body.Portal_ID,
//         EstimatedTime: req.body.EstimatedTime,
//         EstimatedCost: req.body.EstimatedCost,
//         ResourceID: req.body.ResourceID,
//         Status: req.body.Status,
//         Remark: req.body.Remark,
//       };
//       Project.create(project, function (err, project) {
//         if (err) {
//           console.log(err);
//           res.send("error");
//         } else {
//           res.send(project);
//           console.log("new project Saved");
//         }
//       });
//       console.log(req.body);
//     }
//   });
// });

// app.put("/api/admin/project-bid/:id", verifyAdmin, (req, res) => {
//   Joi.validate(req.body, ProjectValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let updateProject;
//       updateProject = {
//         ProjectTitle: req.body.ProjectTitle,
//         ProjectURL: req.body.ProjectURL,
//         ProjectDesc: req.body.ProjectDesc,
//         portals: req.body.Portal_ID,
//         EstimatedTime: req.body.EstimatedTime,
//         EstimatedCost: req.body.EstimatedCost,
//         ResourceID: req.body.ResourceID,
//         Status: req.body.Status,
//         Remark: req.body.Remark,
//       };

//       Project.findByIdAndUpdate(
//         req.params.id,
//         updateProject,
//         function (err, Project) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(updateProject);
//           }
//         }
//       );
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/admin/project-bid/:id", verifyAdmin, (req, res) => {
//   Project.findByIdAndRemove({ _id: req.params.id }, function (err, project) {
//     if (err) {
//       console.log("error");
//       res.send("err");
//     } else {
//       console.log("project deleted");
//       res.send(project);
//     }
//   });
//   console.log("delete");
//   console.log(req.params.id);
// });

// /////////////////////////////////////
// //////   HR                      ////
// /////////////////////////////////////

// app.get("/api/country", verifyHR, (req, res) => {
//   Country.find()
//     .populate({ path: "states", populate: { path: "cities" } })
//     .exec(function (err, country) {
//       res.send(country);
//     });
// });

// app.post("/api/country", verifyHR, (req, res) => {
//   Joi.validate(req.body, CountryValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newCountry;

//       newCountry = {
//         CountryName: req.body.CountryName,
//       };

//       Country.create(newCountry, function (err, country) {
//         if (err) {
//           console.log(err);
//           res.send("error");
//         } else {
//           res.send(country);
//           console.log("new country Saved");
//         }
//       });
//       console.log(req.body);
//     }
//   });
// });

// app.put("/api/country/:id", verifyHR, (req, res) => {
//   Joi.validate(req.body, CountryValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newCountry;

//       newCountry = {
//         CountryName: req.body.CountryName,
//       };
//       Country.findByIdAndUpdate(
//         req.params.id,
//         newCountry,
//         function (err, country) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(newCountry);
//           }
//         }
//       );
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/country/:id", verifyHR, (req, res) => {
//   Country.findById(req.params.id, function (err, foundCountry) {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", foundCountry);
//       if (!foundCountry.states.length == 0) {
//         res
//           .status(403)
//           .send(
//             "First Delete All The states in this country before deleting this country"
//           );
//       } else {
//         Country.findByIdAndRemove(
//           { _id: req.params.id },
//           function (err, country) {
//             if (!err) {
//               State.deleteMany(
//                 { country: { _id: req.params.id } },
//                 function (err) {
//                   if (err) {
//                     console.log(err);
//                     res.send("error");
//                   } else {
//                     City.deleteMany(
//                       { state: { country: { _id: req.params.id } } },
//                       function (err) {
//                         if (err) {
//                           console.log(err);
//                           res.send("error");
//                         } else {
//                           console.log(" Country deleted");
//                           res.send(country);
//                         }
//                       }
//                     );
//                   }
//                 }
//               );
//             } else {
//               console.log(err);
//               res.send("error");
//             }
//           }
//         );
//       }
//     }
//   });

//   console.log("delete");
//   console.log(req.params.id);
// });

// app.get("/api/state", verifyHR, (req, res) => {
//   State.find()
//     .populate("country citiesx")
//     .exec(function (err, country) {
//       res.send(country);
//     });
// });
// //State
// app.post("/api/state", verifyHR, (req, res) => {
//   Joi.validate(req.body, StateValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newState;

//       newState = {
//         StateName: req.body.StateName,
//         country: req.body.CountryID,
//       };

//       State.create(newState, function (err, state) {
//         if (err) {
//           console.log(err);
//           res.send("error");
//         } else {
//           Country.findById(req.body.CountryID, function (err, country) {
//             if (err) {
//               console.log(err);
//               res.send("err");
//             } else {
//               country.states.push(state);
//               country.save(function (err, data) {
//                 if (err) {
//                   console.log(err);
//                   res.send("err");
//                 } else {
//                   console.log(data);
//                   res.send(state);
//                 }
//               });
//             }
//           });
//           console.log("new country Saved");
//         }
//       });
//       console.log(req.body);
//     }
//   });
// });
// //State
// //state
// app.put("/api/state/:id", verifyHR, (req, res) => {
//   Joi.validate(req.body, StateValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newState;

//       newState = {
//         StateName: req.body.StateName,
//         country: req.body.CountryID,
//       };

//       State.findByIdAndUpdate(req.params.id, newState, function (err, state) {
//         if (err) {
//           res.send("error");
//         } else {
//           res.send(newState);
//         }
//       });
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/state/:id", verifyHR, (req, res) => {
//   State.findById(req.params.id, function (err, foundState) {
//     if (err) {
//       res.send(err);
//     } else {
//       // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", foundCountry);
//       if (!foundState.cities.length == 0) {
//         res
//           .status(403)
//           .send(
//             "First Delete All The cities in this state before deleting this state"
//           );
//       } else {
//         State.findByIdAndRemove({ _id: req.params.id }, function (err, state) {
//           if (!err) {
//             console.log(" state deleted");
//             console.log("country id---------", state.country[0]);
//             Country.update(
//               { _id: state.country[0] },
//               { $pull: { states: state._id } },
//               function (err, numberAffected) {
//                 console.log(numberAffected);
//                 res.send(state);
//               }
//             );
//           } else {
//             console.log(err);
//             res.send("error");
//           }
//         });
//       }
//     }
//   });

//   console.log("delete");
//   console.log(req.params.id);
// });

// /////////////city

// app.get("/api/city", verifyHR, (req, res) => {
//   City.find()
//     .populate({ path: "state", populate: { path: "country" } })
//     .exec(function (err, city) {
//       // employee = employees;
//       res.send(city);
//     });
// });
// app.post("/api/city", verifyHR, (req, res) => {
//   Joi.validate(req.body, CityValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newCity;

//       newCity = {
//         CityName: req.body.CityName,
//         state: req.body.StateID,
//       };

//       City.create(newCity, function (err, city) {
//         if (err) {
//           console.log(err);
//           res.send("error");
//         } else {
//           State.findById(req.body.StateID, function (err, state) {
//             if (err) {
//               console.log(err);
//               res.send("err");
//             } else {
//               state.cities.push(city);
//               state.save(function (err, data) {
//                 if (err) {
//                   console.log(err);
//                   res.send("err");
//                 } else {
//                   console.log(data);
//                   res.send(city);
//                 }
//               });
//             }
//           });

//           console.log("new city Saved");
//         }
//       });
//       console.log(req.body);
//     }
//   });
// });
// app.put("/api/city/:id", verifyHR, (req, res) => {
//   Joi.validate(req.body, CityValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newCity;

//       newCity = {
//         CityName: req.body.CityName,
//         state: req.body.StateID,
//       };

//       City.findByIdAndUpdate(req.params.id, newCity, function (err, city) {
//         if (err) {
//           res.send("error");
//         } else {
//           res.send(newCity);
//         }
//       });
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/city/:id", verifyHR, (req, res) => {
//   Company.find({ city: req.params.id }, function (err, country) {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     } else {
//       console.log(country.length == 0);
//       if (country.length == 0) {
//         City.findByIdAndRemove({ _id: req.params.id }, function (err, city) {
//           if (!err) {
//             console.log(" state deleted");
//             State.update(
//               { _id: city.state[0] },
//               { $pull: { cities: city._id } },
//               function (err, numberAffected) {
//                 console.log(numberAffected);
//                 res.send(city);
//               }
//             );
//           } else {
//             console.log(err);
//             res.send("error");
//           }
//         });
//       } else {
//         res
//           .status(403)
//           .send(
//             "This city is associated with company so you can not delete this"
//           );
//       }
//     }
//   });

//   console.log("delete");
//   console.log(req.params.id);
// });

// ///////////////////////////
// ////////////company

// app.get("/api/company", verifyAdminHR, (req, res) => {
//   // var employee = {};
//   // {path: 'projects', populate: {path: 'portals'}}
//   Company.find()
//     // .populate({ path: "city", populate: { path: "state" } ,populate: { populate: { path: "country" } } })
//     .populate({
//       path: "city",
//       populate: {
//         path: "state",
//         model: "State",
//         populate: {
//           path: "country",
//           model: "Country",
//         },
//       },
//     })
//     .exec(function (err, compnay) {
//       res.send(compnay);
//     });
// });
// app.post("/api/company", verifyHR, (req, res) => {
//   Joi.validate(req.body, CompanyValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newCompany;

//       newCompany = {
//         CompanyName: req.body.CompanyName,
//         Address: req.body.Address,
//         city: req.body.CityID,
//         PostalCode: req.body.PostalCode,
//         Website: req.body.Website,
//         Email: req.body.Email,
//         ContactPerson: req.body.ContactPerson,
//         ContactNo: req.body.ContactNo,
//         FaxNo: req.body.FaxNo,
//         PanNo: req.body.PanNo,
//         GSTNo: req.body.GSTNo,
//         CINNo: req.body.CINNo,
//       };

//       Company.create(newCompany, function (err, company) {
//         if (err) {
//           console.log(err);
//           res.send("error");
//         } else {
//           res.send(newCompany);
//           console.log("new company Saved");
//         }
//       });
//       console.log(req.body);
//     }
//   });
// });
// app.put("/api/company/:id", verifyHR, (req, res) => {
//   Joi.validate(req.body, CompanyValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newCompany;

//       newCompany = {
//         CompanyName: req.body.CompanyName,
//         Address: req.body.Address,
//         city: req.body.CityID,
//         PostalCode: req.body.PostalCode,
//         Website: req.body.Website,
//         Email: req.body.Email,
//         ContactPerson: req.body.ContactPerson,
//         ContactNo: req.body.ContactNo,
//         FaxNo: req.body.FaxNo,
//         PanNo: req.body.PanNo,
//         GSTNo: req.body.GSTNo,
//         CINNo: req.body.CINNo,
//       };

//       Company.findByIdAndUpdate(
//         req.params.id,
//         newCompany,
//         function (err, company) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(newCompany);
//           }
//         }
//       );
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });
// /////////////////////////////////
// /////////////////////Employee

// app.get("/api/employee", verifyHR, (req, res) => {
//   // {path: 'projects', populate: {path: 'portals'}}
//   Employee.find()
//     // .populate({ path: "city", populate: { path: "state" } ,populate: { populate: { path: "country" } } })
//     .populate({
//       path: "role position department",
//       // populate: {
//       //   path: "state",
//       //   model: "State",
//       //   populate: {
//       //     path: "country",
//       //     model: "Country"
//       //   }
//       // }
//     })
//     .select("-salary -education -familyInfo -workExperience -Password")
//     .exec(function (err, employee) {
//       res.send(employee);
//     });
// });

// app.post("/api/employee", verifyHR, (req, res) => {
//   Joi.validate(req.body, EmployeeValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newEmployee;

//       newEmployee = {
//         Email: req.body.Email,
//         Password: req.body.Password,
//         role: req.body.RoleID,
//         Account: req.body.Account,
//         Gender: req.body.Gender,
//         FirstName: req.body.FirstName,
//         MiddleName: req.body.MiddleName,
//         LastName: req.body.LastName,
//         DOB: req.body.DOB,
//         ContactNo: req.body.ContactNo,
//         EmployeeCode: req.body.EmployeeCode,
//         department: req.body.DepartmentID,
//         position: req.body.PositionID,
//         DateOfJoining: req.body.DateOfJoining,
//         TerminateDate: req.body.TerminateDate,
//       };

//       Employee.create(newEmployee, function (err, employee) {
//         if (err) {
//           console.log(err);
//           res.send("error");
//         } else {
//           res.send(employee);

//           console.log("new employee Saved");
//         }
//       });
//       console.log(req.body);
//     }
//   });
// });

// app.put("/api/employee/:id", verifyHR, (req, res) => {
//   Joi.validate(req.body, EmployeeValidationUpdate, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newEmployee;
//       newEmployee = {
//         Email: req.body.Email,
//         // Password: req.body.Password,
//         Account: req.body.Account,
//         role: req.body.RoleID,
//         Gender: req.body.Gender,
//         FirstName: req.body.FirstName,
//         MiddleName: req.body.MiddleName,
//         LastName: req.body.LastName,
//         DOB: req.body.DOB,
//         ContactNo: req.body.ContactNo,
//         EmployeeCode: req.body.EmployeeCode,
//         department: req.body.DepartmentID,
//         position: req.body.PositionID,
//         DateOfJoining: req.body.DateOfJoining,
//         TerminateDate: req.body.TerminateDate,
//       };

//       Employee.findByIdAndUpdate(
//         req.params.id,
//         newEmployee,
//         function (err, employee) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(newEmployee);
//           }
//         }
//       );
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/employee/:id", verifyHR, (req, res) => {
//   // Employee.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
//   //   if (!err) {
//   //     console.log(" state deleted");
//   //     res.send(employee);
//   //   } else {
//   //     console.log(err);
//   //     res.send("error");
//   //   }
//   // });
//   res.send("error");
//   console.log("delete");
//   console.log(req.params.id);
// });

// ////////////////////////////////
// //////////////////salary
// app.get("/api/salary", verifyHR, (req, res) => {
//   // var employee = {};
//   // {path: 'projects', populate: {path: 'portals'}}
//   Employee.find()
//     // .populate({ path: "city", populate: { path: "state" } ,populate: { populate: { path: "country" } } })
//     .populate({
//       path: "salary",
//       // populate: {
//       //   path: "state",
//       //   model: "State",
//       //   populate: {
//       //     path: "country",
//       //     model: "Country"
//       //   }
//       // }
//     })
//     // .select(" -role -position -department")
//     .select("FirstName LastName MiddleName")
//     .exec(function (err, company) {
//       // employee = employees;
//       let filteredCompany = company.filter(
//         (data) => data["salary"].length == 1
//       );
//       // console.log(filteredCompany);
//       res.send(filteredCompany);
//     });
// });

// app.post("/api/salary/:id", verifyHR, (req, res) => {
//   Joi.validate(req.body, SalaryValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       Employee.findById(req.params.id, function (err, employee) {
//         if (err) {
//           console.log(err);
//           res.send("err");
//         } else {
//           if (employee.salary.length == 0) {
//             let newSalary;

//             newSalary = {
//               BasicSalary: req.body.BasicSalary,
//               BankName: req.body.BankName,
//               AccountNo: req.body.AccountNo,
//               AccountHolderName: req.body.AccountHolderName,
//               IFSCcode: req.body.IFSCcode,
//               TaxDeduction: req.body.TaxDeduction,
//             };

//             Salary.create(newSalary, function (err, salary) {
//               if (err) {
//                 console.log(err);
//                 res.send("error");
//               } else {
//                 employee.salary.push(salary);
//                 employee.save(function (err, data) {
//                   if (err) {
//                     console.log(err);
//                     res.send("err");
//                   } else {
//                     console.log(data);
//                     res.send(salary);
//                   }
//                 });
//                 console.log("new salary Saved");
//               }
//             });
//             console.log(req.body);
//           } else {
//             res
//               .status(403)
//               .send("Salary Information about this employee already exits");
//           }
//         }
//       });
//     }
//   });
// });

// app.put("/api/salary/:id", verifyHR, (req, res) => {
//   Joi.validate(req.body, SalaryValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newSalary;

//       newSalary = {
//         BasicSalary: req.body.BasicSalary,
//         BankName: req.body.BankName,
//         AccountNo: req.body.AccountNo,
//         AccountHolderName: req.body.AccountHolderName,
//         IFSCcode: req.body.IFSCcode,
//         TaxDeduction: req.body.TaxDeduction,
//       };

//       Salary.findByIdAndUpdate(
//         req.params.id,
//         newSalary,
//         function (err, salary) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(newSalary);
//           }
//         }
//       );
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/salary/:id", verifyHR, (req, res) => {
//   Employee.findById({ _id: req.params.id }, function (err, employee) {
//     console.log("uuuuuuuunnnnnnnnnnnnnnndef", employee.salary[0]);
//     if (err) {
//       res.send("error");
//       console.log(err);
//     } else {
//       Salary.findByIdAndRemove(
//         { _id: employee.salary[0] },
//         function (err, salary) {
//           if (!err) {
//             console.log("salary deleted");
//             Employee.update(
//               { _id: req.params.id },
//               { $pull: { salary: employee.salary[0] } },
//               function (err, numberAffected) {
//                 console.log(numberAffected);
//                 res.send(salary);
//               }
//             );
//           } else {
//             console.log(err);
//             res.send("error");
//           }
//         }
//       );
//       console.log("delete");
//       console.log(req.params.id);
//     }
//   });
// });

// //////////////////////////////////////
// /////////////////////////////////////
// /////////////////////////////Employee dashboard
// /////////////////////////////////////
// /////////////////////////////////////

// ////////////////////////////////////
// ////////////////////////////personal info

// app.get("/api/personal-info/:id", verifyHREmployee, (req, res) => {
//   console.log("personal-info", req.params.id);
//   Employee.findById(req.params.id)
//     // .populate({ path: "city", populate: { path: "state" } ,populate: { populate: { path: "country" } } })
//     .populate({
//       path: "role position department",
//       //   // populate: {
//       //   //   path: "state",
//       //   //   model: "State",
//       //   //   populate: {
//       //   //     path: "country",
//       //   //     model: "Country"
//       //   //   }
//       //   // }
//     })
//     .select("-salary -education -familyInfo -workExperience")
//     .exec(function (err, employee) {
//       // employee = employees;
//       res.send(employee);
//     });
// });

// app.put("/api/personal-info/:id", verifyEmployee, (req, res) => {
//   Joi.validate(req.body, EmployeePersonalInfoValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newEmployee;

//       newEmployee = {
//         BloodGroup: req.body.BloodGroup,
//         ContactNo: req.body.ContactNo,
//         DOB: req.body.DOB,
//         Email: req.body.Email,
//         EmergencyContactNo: req.body.EmergencyContactNo,
//         Gender: req.body.Gender,
//         Hobbies: req.body.Hobbies,
//         PANcardNo: req.body.PANcardNo,
//         PermanetAddress: req.body.PermanetAddress,
//         PresentAddress: req.body.PresentAddress,
//       };
//       Employee.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: newEmployee,
//         },
//         function (err, numberAffected) {
//           console.log(numberAffected);
//           res.send(newEmployee);
//         }
//       );
//     }

//     console.log("put");
//     console.log(req.body);
//   });
// });

// ////////////////////////////////
// ////////////////////education
// app.get("/api/education/:id", verifyHREmployee, (req, res) => {
//   console.log(req.params.id);
//   // var employee = {};
//   // {path: 'projects', populate: {path: 'portals'}}
//   Employee.findById(req.params.id)
//     // .populate({ path: "city", populate: { path: "state" } ,populate: { populate: { path: "country" } } })
//     .populate({
//       path: "education",
//       // populate: {
//       //   path: "state",
//       //   model: "State",
//       //   populate: {
//       //     path: "country",
//       //     model: "Country"
//       //   }
//       // }
//     })
//     // .select(" -role -position -department")
//     .select("FirstName LastName MiddleName")
//     .exec(function (err, employee) {
//       // console.log(filteredCompany);
//       res.send(employee);
//     });
// });

// app.post("/api/education/:id", verifyEmployee, (req, res) => {
//   Joi.validate(req.body, EducationValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       Employee.findById(req.params.id, function (err, employee) {
//         if (err) {
//           console.log(err);
//           res.send("err");
//         } else {
//           let newEducation;

//           newEducation = {
//             SchoolUniversity: req.body.SchoolUniversity,
//             Degree: req.body.Degree,
//             Grade: req.body.Grade,
//             PassingOfYear: req.body.PassingOfYear,
//           };

//           Education.create(newEducation, function (err, education) {
//             if (err) {
//               console.log(err);
//               res.send("error");
//             } else {
//               employee.education.push(education);
//               employee.save(function (err, data) {
//                 if (err) {
//                   console.log(err);
//                   res.send("err");
//                 } else {
//                   console.log(data);
//                   res.send(education);
//                 }
//               });
//               console.log("new Education Saved");
//             }
//           });
//           console.log(req.body);
//         }
//       });
//     }
//   });
// });

// app.put("/api/education/:id", verifyEmployee, (req, res) => {
//   Joi.validate(req.body, EducationValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newEducation;

//       newEducation = {
//         SchoolUniversity: req.body.SchoolUniversity,
//         Degree: req.body.Degree,
//         Grade: req.body.Grade,
//         PassingOfYear: req.body.PassingOfYear,
//       };

//       Education.findByIdAndUpdate(
//         req.params.id,
//         newEducation,
//         function (err, education) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(newEducation);
//           }
//         }
//       );
//     }
//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/education/:id/:id2", verifyEmployee, (req, res) => {
//   Employee.findById({ _id: req.params.id }, function (err, employee) {
//     if (err) {
//       res.send("error");
//       console.log(err);
//     } else {
//       Education.findByIdAndRemove(
//         { _id: req.params.id2 },
//         function (err, education) {
//           if (!err) {
//             console.log("education deleted");
//             Employee.update(
//               { _id: req.params.id },
//               { $pull: { education: req.params.id2 } },
//               function (err, numberAffected) {
//                 console.log(numberAffected);
//                 res.send(education);
//               }
//             );
//           } else {
//             console.log(err);
//             res.send("error");
//           }
//         }
//       );
//       console.log("delete");
//       console.log(req.params.id);
//     }
//   });
// });

// //////////////////////////////////
// //////////////////////////familyInfo
// app.get("/api/family-info/:id", verifyHREmployee, (req, res) => {
//   console.log(req.params.id);
//   // var employee = {};
//   // {path: 'projects', populate: {path: 'portals'}}
//   Employee.findById(req.params.id)
//     // .populate({ path: "city", populate: { path: "state" } ,populate: { populate: { path: "country" } } })
//     .populate({
//       path: "familyInfo",
//       // populate: {
//       //   path: "state",
//       //   model: "State",
//       //   populate: {
//       //     path: "country",
//       //     model: "Country"
//       //   }
//       // }
//     })
//     // .select(" -role -position -department")
//     .select("FirstName LastName MiddleName")
//     .exec(function (err, employee) {
//       // console.log(filteredCompany);
//       res.send(employee);
//     });
// });

// app.post("/api/family-info/:id", verifyEmployee, (req, res) => {
//   Joi.validate(req.body, FamilyInfoValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       Employee.findById(req.params.id, function (err, employee) {
//         if (err) {
//           console.log(err);
//           res.send("err");
//         } else {
//           let newFamilyInfo;

//           newFamilyInfo = {
//             Name: req.body.Name,
//             Relationship: req.body.Relationship,
//             DOB: req.body.DOB,
//             Occupation: req.body.Occupation,
//           };

//           FamilyInfo.create(newFamilyInfo, function (err, familyInfo) {
//             if (err) {
//               console.log(err);
//               res.send("error");
//             } else {
//               employee.familyInfo.push(familyInfo);
//               employee.save(function (err, data) {
//                 if (err) {
//                   console.log(err);
//                   res.send("err");
//                 } else {
//                   console.log(data);
//                   res.send(familyInfo);
//                 }
//               });
//               console.log("new familyInfo Saved");
//             }
//           });
//           console.log(req.body);
//         }
//       });
//     }
//   });
// });

// app.put("/api/family-info/:id", verifyEmployee, (req, res) => {
//   Joi.validate(req.body, FamilyInfoValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newFamilyInfo;

//       newFamilyInfo = {
//         Name: req.body.Name,
//         Relationship: req.body.Relationship,
//         DOB: req.body.DOB,
//         Occupation: req.body.Occupation,
//       };

//       FamilyInfo.findByIdAndUpdate(
//         req.params.id,
//         newFamilyInfo,
//         function (err, familyInfo) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(newFamilyInfo);
//           }
//         }
//       );
//     }
//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/family-info/:id/:id2", verifyEmployee, (req, res) => {
//   Employee.findById({ _id: req.params.id }, function (err, employee) {
//     if (err) {
//       res.send("error");
//       console.log(err);
//     } else {
//       FamilyInfo.findByIdAndRemove(
//         { _id: req.params.id2 },
//         function (err, familyInfo) {
//           if (!err) {
//             console.log("FamilyInfo deleted");
//             Employee.update(
//               { _id: req.params.id },
//               { $pull: { familyInfo: req.params.id2 } },
//               function (err, numberAffected) {
//                 console.log(numberAffected);
//                 res.send(familyInfo);
//               }
//             );
//           } else {
//             console.log(err);
//             res.send("error");
//           }
//         }
//       );
//       console.log("delete");
//       console.log(req.params.id);
//     }
//   });
// });

// //////////////////////////////////
// //////////////////////////WorkExperience workExperience
// app.get("/api/work-experience/:id", verifyHREmployee, (req, res) => {
//   console.log(req.params.id);
//   // var employee = {};
//   // {path: 'projects', populate: {path: 'portals'}}
//   Employee.findById(req.params.id)
//     // .populate({ path: "city", populate: { path: "state" } ,populate: { populate: { path: "country" } } })
//     .populate({
//       path: "workExperience",
//       // populate: {
//       //   path: "state",
//       //   model: "State",
//       //   populate: {
//       //     path: "country",
//       //     model: "Country"
//       //   }
//       // }
//     })
//     // .select(" -role -position -department")
//     .select("FirstName LastName MiddleName")
//     .exec(function (err, employee) {
//       res.send(employee);
//     });
// });

// app.post("/api/work-experience/:id", verifyEmployee, (req, res) => {
//   Joi.validate(req.body, WorkExperienceValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       Employee.findById(req.params.id, function (err, employee) {
//         if (err) {
//           console.log(err);
//           res.send("err");
//         } else {
//           let newWorkExperience;

//           newWorkExperience = {
//             CompanyName: req.body.CompanyName,
//             Designation: req.body.Designation,
//             FromDate: req.body.FromDate,
//             ToDate: req.body.ToDate,
//           };

//           WorkExperience.create(
//             newWorkExperience,
//             function (err, workExperience) {
//               if (err) {
//                 console.log(err);
//                 res.send("error");
//               } else {
//                 employee.workExperience.push(workExperience);
//                 employee.save(function (err, data) {
//                   if (err) {
//                     console.log(err);
//                     res.send("err");
//                   } else {
//                     console.log(data);
//                     res.send(workExperience);
//                   }
//                 });
//                 console.log("new WorkExperience Saved");
//               }
//             }
//           );
//           console.log(req.body);
//         }
//       });
//     }
//   });
// });

// app.put("/api/work-experience/:id", verifyEmployee, (req, res) => {
//   Joi.validate(req.body, WorkExperienceValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newWorkExperience;

//       newWorkExperience = {
//         CompanyName: req.body.CompanyName,
//         Designation: req.body.Designation,
//         FromDate: req.body.FromDate,
//         ToDate: req.body.ToDate,
//       };

//       WorkExperience.findByIdAndUpdate(
//         req.params.id,
//         newWorkExperience,
//         function (err, workExperience) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(newWorkExperience);
//           }
//         }
//       );
//     }
//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete("/api/Work-experience/:id/:id2", verifyEmployee, (req, res) => {
//   Employee.findById({ _id: req.params.id }, function (err, employee) {
//     if (err) {
//       res.send("error");
//       console.log(err);
//     } else {
//       WorkExperience.findByIdAndRemove(
//         { _id: req.params.id2 },
//         function (err, workExperience) {
//           if (!err) {
//             console.log("WorkExperience deleted");
//             Employee.update(
//               { _id: req.params.id },
//               { $pull: { workExperience: req.params.id2 } },
//               function (err, numberAffected) {
//                 console.log(numberAffected);
//                 res.send(workExperience);
//               }
//             );
//           } else {
//             console.log(err);
//             res.send("error");
//           }
//         }
//       );
//       console.log("delete");
//       console.log(req.params.id);
//     }
//   });
// });

// /////////////////////
// ////////////LeaveApplication leaveApplication leave-application-emp
// app.get("/api/leave-application-emp/:id", verifyEmployee, (req, res) => {
//   console.log(req.params.id);
//   // var employee = {};
//   // {path: 'projects', populate: {path: 'portals'}}
//   Employee.findById(req.params.id)
//     // .populate({ path: "city", populate: { path: "state" } ,populate: { populate: { path: "country" } } })
//     .populate({
//       path: "leaveApplication",
//       // populate: {
//       //   path: "state",
//       //   model: "State",
//       //   populate: {
//       //     path: "country",
//       //     model: "Country"
//       //   }
//       // }
//     })
//     // .select(" -role -position -department")
//     .select("FirstName LastName MiddleName")
//     .exec(function (err, employee) {
//       // console.log(filteredCompany);
//       if (err) {
//         console.log(err);
//         res.send("error");
//       } else {
//         res.send(employee);
//       }
//     });
// });

// app.post("/api/leave-application-emp/:id", verifyEmployee, (req, res) => {
//   Joi.validate(req.body, LeaveApplicationValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       Employee.findById(req.params.id, function (err, employee) {
//         if (err) {
//           console.log(err);
//           res.send("err");
//         } else {
//           let newLeaveApplication;
//           newLeaveApplication = {
//             Leavetype: req.body.Leavetype,
//             FromDate: req.body.FromDate,
//             ToDate: req.body.ToDate,
//             Reasonforleave: req.body.Reasonforleave,
//             Status: req.body.Status,
//             employee: req.params.id,
//           };

//           LeaveApplication.create(
//             newLeaveApplication,
//             function (err, leaveApplication) {
//               if (err) {
//                 console.log(err);
//                 res.send("error");
//               } else {
//                 employee.leaveApplication.push(leaveApplication);
//                 employee.save(function (err, data) {
//                   if (err) {
//                     console.log(err);
//                     res.send("err");
//                   } else {
//                     console.log(data);
//                     res.send(leaveApplication);
//                   }
//                 });
//                 console.log("new leaveApplication Saved");
//               }
//             }
//           );
//           console.log(req.body);
//         }
//       });
//     }
//   });
// });

// app.put("/api/leave-application-emp/:id", verifyEmployee, (req, res) => {
//   Joi.validate(req.body, LeaveApplicationValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newLeaveApplication;

//       newLeaveApplication = {
//         Leavetype: req.body.Leavetype,
//         FromDate: req.body.FromDate,
//         ToDate: req.body.ToDate,
//         Reasonforleave: req.body.Reasonforleave,
//         Status: req.body.Status,
//         employee: req.params.id,
//       };

//       LeaveApplication.findByIdAndUpdate(
//         req.params.id,
//         newLeaveApplication,
//         function (err, leaveApplication) {
//           if (err) {
//             res.send("error");
//           } else {
//             res.send(newLeaveApplication);
//           }
//         }
//       );
//     }
//     console.log("put");
//     console.log(req.body);
//   });
// });

// app.delete(
//   "/api/leave-application-emp/:id/:id2",
//   verifyEmployee,
//   (req, res) => {
//     Employee.findById({ _id: req.params.id }, function (err, employee) {
//       if (err) {
//         res.send("error");
//         console.log(err);
//       } else {
//         LeaveApplication.findByIdAndRemove(
//           { _id: req.params.id2 },
//           function (err, leaveApplication) {
//             if (!err) {
//               console.log("LeaveApplication deleted");
//               Employee.update(
//                 { _id: req.params.id },
//                 { $pull: { leaveApplication: req.params.id2 } },
//                 function (err, numberAffected) {
//                   console.log(numberAffected);
//                   res.send(leaveApplication);
//                 }
//               );
//             } else {
//               console.log(err);
//               res.send("error");
//             }
//           }
//         );
//         console.log("delete");
//         console.log(req.params.id);
//       }
//     });
//   }
// );

// /////////////////////
// ////////////LeaveApplication leaveApplication HHHHHHRRRRR
// app.get("/api/leave-application-hr", verifyHR, (req, res) => {
//   // var employee = {};
//   // {path: 'projects', populate: {path: 'portals'}}
//   LeaveApplication.find()
//     // .populate({ path: "city", populate: { path: "state" } ,populate: { populate: { path: "country" } } })
//     .populate({
//       path: "employee",
//     })
//     // .select(" -role -position -department")
//     // .select("FirstName LastName MiddleName"
//     // )
//     .exec(function (err, leaveApplication) {
//       // console.log(filteredCompany);
//       if (err) {
//         console.log(err);
//         res.send("error");
//       } else {
//         res.send(leaveApplication);
//       }
//     });
// });

// app.put("/api/leave-application-hr/:id", verifyHR, (req, res) => {
//   Joi.validate(req.body, LeaveApplicationHRValidation, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err.details[0].message);
//     } else {
//       let newLeaveApplication;

//       newLeaveApplication = {
//         Status: req.body.Status,
//       };
//       LeaveApplication.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: newLeaveApplication,
//         },
//         function (err, numberAffected) {
//           console.log(numberAffected);
//           res.send(newLeaveApplication);
//         }
//       );

//       console.log(req.body);
//     }
//   });
// });

// app.delete("/api/leave-application-hr/:id/:id2", verifyHR, (req, res) => {
//   Employee.findById({ _id: req.params.id }, function (err, employee) {
//     if (err) {
//       res.send("error");
//       console.log(err);
//     } else {
//       LeaveApplication.findByIdAndRemove(
//         { _id: req.params.id2 },
//         function (err, leaveApplication) {
//           if (!err) {
//             console.log("LeaveApplication deleted");
//             Employee.update(
//               { _id: req.params.id },
//               { $pull: { leaveApplication: req.params.id2 } },
//               function (err, numberAffected) {
//                 console.log(numberAffected);
//                 res.send(leaveApplication);
//               }
//             );
//           } else {
//             console.log(err);
//             res.send("error");
//           }
//         }
//       );
//       console.log("delete");
//       console.log(req.params.id);
//     }
//   });
// });

// //////////////////////////////////
// /////////////////////login

// app.post("/api/login", (req, res) => {
//   Joi.validate(
//     req.body,
//     Joi.object().keys({
//       email: Joi.string().max(200).required(),
//       password: Joi.string().max(100).required(),
//     }),
//     async (err, result) => {
//       if (err) {
//         console.log(err);
//         res.status(400).send(err.details[0].message);
//       } else {
//         await Employee.findOne(
//           { Email: req.body.email },
//           "Password _id Account FirstName LastName",
//           function (err, document) {
//             if (err || document == null) {
//               res.send("false");
//             } else {
//               if (document.Password == req.body.password) {
//                 emp = {
//                   _id: document._id,
//                   Account: document.Account,
//                   FirstName: document.FirstName,
//                   LastName: document.LastName,
//                 };
//                 var token = jwt.sign(emp, jwtKey);
//                 res.send(token);
//               } else {
//                 res.sendStatus(400);
//               }
//             }
//           }
//         );
//       }
//     }
//   );
// });

// // middleware

// function verifyAdmin(req, res, next) {
//   console.log(req.headers["authorization"]);
//   const Header = req.headers["authorization"];

//   if (typeof Header !== "undefined") {
//     // decodedData = jwt.decode(req.headers['authorization']);
//     // if(decodedData.Account)
//     jwt.verify(Header, jwtKey, (err, authData) => {
//       if (err) {
//         res.sendStatus(403);
//       } else {
//         console.log(authData);
//         if (authData.Account == 1) {
//           next();
//         } else {
//           res.sendStatus(403);
//         }
//       }
//     });
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }
// function verifyAdminHR(req, res, next) {
//   console.log(req.headers["authorization"]);
//   const Header = req.headers["authorization"];

//   if (typeof Header !== "undefined") {
//     // decodedData = jwt.decode(req.headers['authorization']);
//     // if(decodedData.Account)
//     jwt.verify(Header, jwtKey, (err, authData) => {
//       if (err) {
//         res.sendStatus(403);
//       } else {
//         console.log(authData);
//         if (authData.Account == 1 || authData.Account == 2) {
//           next();
//         } else {
//           res.sendStatus(403);
//         }
//       }
//     });
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }
// function verifyHR(req, res, next) {
//   console.log(req.headers["authorization"]);
//   const Header = req.headers["authorization"];

//   if (typeof Header !== "undefined") {
//     // decodedData = jwt.decode(req.headers['authorization']);
//     // if(decodedData.Account)
//     jwt.verify(Header, jwtKey, (err, authData) => {
//       if (err) {
//         res.sendStatus(403);
//       } else {
//         console.log(authData);
//         if (authData.Account == 2) {
//           next();
//         } else {
//           res.sendStatus(403);
//         }
//       }
//     });
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }
// function verifyHREmployee(req, res, next) {
//   console.log(req.headers["authorization"]);
//   const Header = req.headers["authorization"];

//   if (typeof Header !== "undefined") {
//     // decodedData = jwt.decode(req.headers['authorization']);
//     // if(decodedData.Account)
//     jwt.verify(Header, jwtKey, (err, authData) => {
//       if (err) {
//         res.sendStatus(403);
//       } else {
//         console.log(authData);
//         if (authData.Account == 2) {
//           next();
//         } else if (authData.Account == 3) {
//           if (authData._id == req.params.id) {
//             next();
//           } else {
//             res.sendStatus(403);
//           }
//         } else {
//           res.sendStatus(403);
//         }
//       }
//     });
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }
// function verifyEmployee(req, res, next) {
//   console.log(req.headers["authorization"]);
//   const Header = req.headers["authorization"];

//   if (typeof Header !== "undefined") {
//     // decodedData = jwt.decode(req.headers['authorization']);
//     // if(decodedData.Account)
//     jwt.verify(Header, jwtKey, (err, authData) => {
//       if (err) {
//         res.sendStatus(403);
//       } else {
//         if (authData._id == req.params.id) {
//           console.log(authData);
//           if (authData.Account == 3) {
//             next();
//           } else {
//             res.sendStatus(403);
//           }
//         } else {
//           res.sendStatus(403);
//         }
//       }
//     });
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }

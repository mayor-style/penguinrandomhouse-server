const express = require("express");
const viewPdf = require("../controllers/adminController");

const adminRoute = express.Router();

adminRoute.get("/view-pdf/:filename", viewPdf);

module.exports = adminRoute;

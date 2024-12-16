const express = require("express");
const reviewFeedback = require("../controllers/adminController");

const adminRoute = express.Router();

adminRoute.post("/reviewFeedback", reviewFeedback);

module.exports = adminRoute;

const express = require("express");
const submission = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/submit", submission);

module.exports = userRoute;

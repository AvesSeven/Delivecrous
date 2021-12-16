const express = require("express");
const LoginRouter = express.Router();
const LoginController = require("../controllers/login.controller.js");
// const { validate } = require("express-validation");

LoginRouter.route("/").post((req, res, next) => {
  LoginController.login(req, res, next);
});

module.exports = LoginRouter;


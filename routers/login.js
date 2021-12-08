const express = require("express");
const loginRouter = express.Router();
const LoginController = require("../controllers/login.controller.js");
const { validate } = require("express-validation");

loginRouter.route("/").post((req, res, next) => {
  loginController.login(req, res, next);
});

module.exports = loginRouter;


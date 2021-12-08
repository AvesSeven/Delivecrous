const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/user.controller.js");
const { validate } = require("express-validation");
const UserValidator = require("../validators/user.validators.js");

UserRouter
    .route(API_USER_PARAM)
    .post(UserController.create);

module.exports = DishRouter;
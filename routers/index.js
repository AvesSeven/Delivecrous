const express = require("express");
const router = express.Router();
const DishRouter = require("./dish.router.js");
const API_USERS = `/dishes`;

router.use(API_USERS, DishRouter);

module.exports = router;
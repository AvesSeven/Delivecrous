const UserService = require("../services/user.service");


const UserController = {
    create: async (req, res, next) => {
        const user = req.body;
        await UserService.create(user);
        res.status(200).send({ message: "user created successfully" });
    },
}

module.exports = UserController;

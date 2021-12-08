const UserRepository = require("../repositories/user.repository");
const bcrypt = require('bcrypt'),

const UserService = {
    findAll: async () => {
        return await UserRepository.findAll();
    },

    findById: async(id) => {
        const user = await UserRepository.findById(id);
        return user;
    },

    create: async (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
        await UserRepository.create(user);
    },
};

module.exports = UserService;
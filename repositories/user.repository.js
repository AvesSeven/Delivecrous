const db = require("../models/user.js");

const UserRepository = {
    findAll: () => {
        return db.find();
    },

    findById: (id) => {
        return db.findById(id);
    },

    create: (user) => {
        return new db(user).save();
    },
};

module.exports = UserRepository;
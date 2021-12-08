const db = require("../models/dish.js");

const DishRepository = {
    findAll: () => {
        return db.find();
    },

    findById: (id) => {
        return db.findById(id);
    },

    create: (dish) => {
        return new db(dish).save();
    },

    update: (id, dish) => {
        return db.findByIdAndUpdate(id, dish);
    },

    delete: (id) => {
        return db.findByIdAndDelete(id);
    },
};

module.exports = DishRepository;
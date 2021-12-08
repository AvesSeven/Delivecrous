const DishRepository = require("../repositories/dish.repository");

const DishService = {
    findAll: async () => {
        return await DishRepository.findAll();
    },

    findById: async(id) => {
        const dish = await DishRepository.findById(id);
        return dish;
    },

    create: async (dish) => {
        await DishRepository.create(dish);
    },

    update: async (id, dishInfo) => {
        const dish = await DishRepository.findById(id);
        if(!dish) {
            throw Error("dish not found");
        }
        return await DishRepository.update(id, dishInfo);
    },

    delete: async (id) => {
        const dish = await DishRepository.findById(id);
        if(!dish) {
            throw Error("dish not found");
        }
        return await DishRepository.delete(id);
    },
};

module.exports = DishService;
const categoryModel = require('../model/category.model');

const getAllCategories = async () => {
  return await categoryModel.getAll();
}

module.exports = {
  getAllCategories,
}
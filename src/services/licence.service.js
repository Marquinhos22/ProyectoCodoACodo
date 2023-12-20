const licenceModel = require('../model/licence.model');

const getAllLicences = async () => {
  return await licenceModel.getAll();
}

module.exports = {
  getAllLicences,
}
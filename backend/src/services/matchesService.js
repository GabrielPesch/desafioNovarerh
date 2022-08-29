const matchesModel = require('../models/matchesModel');

const matchesService = {
  async list() {
    const matches = await matchesModel.list();
    return matches;
  }
}

module.exports = matchesService;
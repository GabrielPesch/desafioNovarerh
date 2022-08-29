const matchesService = require('../services/matchesService');

const matchesController = {
  async list(_req, res) {
    const matches = await matchesService.list();
    return res.status(200).json(matches);
  }
}

module.exports = matchesController;
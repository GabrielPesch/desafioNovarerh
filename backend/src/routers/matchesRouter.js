const { Router } = require('express');
const matchesController = require('../controllers/matchesController');

const matchesRouter = Router();

matchesRouter.get('/', matchesController.list)

module.exports = matchesRouter;
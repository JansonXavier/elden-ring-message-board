const models = require('../models/eldenRingModels');

const threadController = {};

threadController.getThreads = (req, res, next) => {
  res.locals.threads = 'threads for ' + req.params.category
  return next();
}

module.exports = threadController;

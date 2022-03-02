const models = require('../models/eldenRingModels');

const messageController = {};

messageController.getMessages = (req, res, next) => {
  res.locals.data = 'messages'
}

module.exports = messageController;

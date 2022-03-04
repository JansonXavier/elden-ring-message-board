const { Message } = require('../models/eldenRingModels');

const messageController = {};

messageController.getMessages = (req, res, next) => {
  const { thread } = req.params

  Message.find({thread}, (err, messages) => {
    if (err) return next({
      log: `Error getting messages in threadController.getMessages: ${err}`,
      message: { err: 'Error getting messages' }, 
    })

    res.locals.messages = messages
    return next();
  })
}

messageController.addMessage = (req, res, next) => {
  const { message, author, date, thread } = req.body;

  Message.create({message, author, date, thread}, (err, message) => {
    if (err) return next({
      log: `Error creating message in messageController.addMessage: ${err}`,
      message: { err: 'Error creating message' }, 
    })

    res.locals.thread = thread;
    res.locals.message = message;
    return next();
  })
}

module.exports = messageController;

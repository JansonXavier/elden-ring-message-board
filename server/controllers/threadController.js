const { Thread } = require('../models/eldenRingModels');

const threadController = {};

threadController.getThread = (req, res, next) => {
  const { _id } = req.params;

  Thread.findOne({_id}, (err, thread) => {
    if (err) return next({
      log: `Error getting thread in threadController.getThread: ${err}`,
      message: { err: 'Error getting thread' }, 
    })

    res.locals.thread = thread
    return next();
  })
}

threadController.getThreads = (req, res, next) => {
  const { category } = req.params;

  Thread.find({category}, (err, threads) => {
    if (err) return next({
      log: `Error getting threads in threadController.getThreads: ${err}`,
      message: { err: 'Error getting threads' }, 
    })

    res.locals.threads = threads
    return next();
  })
}

threadController.addThread = (req, res, next) => {
  const { topic, created_by, num_msgs, last_post, msgs } = req.body;
  const category = req.params.category;

  Thread.create({topic, created_by, num_msgs, last_post, msgs, category}, (err, thread) => {
    if (err) return next({
      log: `Error creating thread in threadController.addThread: ${err}`,
      message: { err: 'Error creating thread' }, 
    })

    res.locals.thread = thread;
    return next();
  })
}


threadController.deleteThread = (req, res, next) => {
  console.log('deleting thread')
  const { _id } = req.params;

  Thread.deleteOne({_id}, (err, thread) => {
    if (err) return next({
      log: `Error deleting thread in threadController.deleteThread: ${err}`,
      message: { err: 'Error deleting thread' }, 
    })

    res.locals.thread = thread;
    return next();
  })
}

module.exports = threadController;

const { Thread } = require('../models/eldenRingModels');

const threadController = {};

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
  const { topic, created_by } = req.body;
  const category = req.params.category;

  Thread.create({topic, created_by, num_msgs: 0, category}, (err, thread) => {
    if (err) return next({
      log: `Error creating thread in threadController.addThread: ${err}`,
      message: { err: 'Error creating thread' }, 
    })

    res.locals.thread = thread;
    return next();
  })
}

threadController.updateThread = (req, res, next) => {
  const { thread } = req.body;

  Thread.findOneAndUpdate({_id: thread}, { $inc: { num_msgs: 1 } }, (err, thread) => {
    if (err) return next({
      log: `Error updating thread in threadController.updateThread: ${err}`,
      message: { err: 'Error updating thread' }, 
    });

    res.locals.thread = thread;
    return next();
  });
};

threadController.deleteThread = (req, res, next) => {
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

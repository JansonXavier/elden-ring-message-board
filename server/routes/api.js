const express = require('express');
const { getThread, getThreads, addThread, deleteThread } = require('../controllers/threadController')
const { getMessages, addMessage } = require('../controllers/messageController')
const router = express.Router();

router.get('/category/:category', getThreads, (req, res) => {
  return res.status(200).json(res.locals.threads)
});

router.post('/category/:category', addThread, getThreads, (req, res) => {
  return res.status(200).json(res.locals.threads)
});

router.get('/threads/:id', getThread, (req, res) => {
  return res.status(200).json(res.locals.thread)
})

router.get('/messages/:thread', getMessages, (req, res) => {
  console.log(res.locals.messages)
  return res.status(200).json(res.locals.messages)
});

router.post('/message', addMessage, (req, res) => {
  return res.status(200).json(res.locals.message)
});

module.exports = router;

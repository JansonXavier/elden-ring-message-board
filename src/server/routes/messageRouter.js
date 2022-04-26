const express = require('express');
const { getMessages, addMessage, deleteMessage } = require('../controllers/messageController');
const { updateThread } = require('../controllers/threadController');

const router = express.Router();

router.get('/:thread', getMessages, (req, res) => {
  return res.status(200).json(res.locals.messages)
});

router.post('/', addMessage, updateThread, (req, res) => {
  return res.status(200).json({ message: res.locals.message, thread: res.locals.thread })
});

router.delete('/:_id', deleteMessage, (req, res) => {
  return res.status(200).json({ message: res.locals.message })
})

module.exports = router;

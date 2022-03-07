const express = require('express');
const { getThreads, addThread, deleteThread } = require('../controllers/threadController')
const { deleteMessages } = require('../controllers/messageController')

const router = express.Router()

router.get('/:category', getThreads, (req, res) => {
  return res.status(200).json(res.locals.threads)
});

router.post('/:category', addThread, (req, res) => {
  return res.status(200).json(res.locals.thread)
});

router.delete('/:_id', deleteThread, deleteMessages, (req, res) => {
  return res.status(200).json(res.locals.thread)
})

module.exports = router
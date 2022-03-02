const express = require('express');
const { getThreads } = require('../controllers/threadController')
const { getMessages } = require('../controllers/messageController')
const router = express.Router();

router.get('/:category', getThreads, (req, res) => {
  console.log('params: ' + req.params.category)
  return res.status(200).json(res.locals.threads)
});

module.exports = router;

const express = require('express');
const threadRouter = require('./threadRouter')
const messageRouter = require('./messageRouter')
const router = express.Router();

router.use('/thread', threadRouter);
router.use('/message', messageRouter);


module.exports = router;

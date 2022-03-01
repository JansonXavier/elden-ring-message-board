const express = require('express');

const router = express.Router();

router.get('/hello', (req, res) => {
  return res.status(200).json({hello: 'hello'});
});

module.exports = router;
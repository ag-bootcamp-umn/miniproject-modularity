// This file acts as a gatekeeper for all my page routes
const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/index.html'))
);


module.exports = router;
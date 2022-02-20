const express = require('express');

const router = express.Router();

// admin login route
router.get('/', (req, res) => {
  console.log('not admin');
});
module.exports = router;

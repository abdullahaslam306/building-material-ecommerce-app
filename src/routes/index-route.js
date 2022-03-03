const express = require('express');

const router = express.Router();

// admin login route
router.get('/', (req, res) => {
  res.render('customer/index')
});
module.exports = router;

const express = require('express');
const router = express.Router();

// admin login route
router.get('/',(req, res)=>{
   res.render('admin/admin-login')
})

module.exports = router;
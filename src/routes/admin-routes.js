const express = require('express');
const router = express.Router();

// admin login route
router.get('/',(req, res)=>{
   res.render('admin/admin-login')
})

router.get('/recover-password',(req, res)=>{
   res.render('admin/recover-password')
})

router.get('/dashboard',(req, res)=>{
   res.render('admin/dashboard')
})

module.exports = router;
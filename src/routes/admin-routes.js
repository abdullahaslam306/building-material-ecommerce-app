const express = require('express');
const { CreateEvent } = require('../controllers')


const router = express.Router();

// admin login route
router.get('/', (req, res) => {
  res.render('admin/admin-login');
});

router.get('/recover-password', (req, res) => {
  res.render('admin/recover-password');
});

router.get('/dashboard', (req, res) => {
  res.render('admin/dashboard');
});
/**
 * Events Routes
 */
router.get('/create-event', (req, res) => {
  res.render('admin/add-event');
});

router.post('/create-event', CreateEvent.upload.single('cover'), CreateEvent.create);

module.exports = router;

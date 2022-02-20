const express = require('express');
const {
  CreateEvent,
  CreateProduct,
} = require('../controllers');

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

router.get('/create-product', (req, res) => {
  res.render('admin/product.ejs');
});

router.post('/create-product', CreateProduct.upload.single('image'), CreateProduct.create);

module.exports = router;

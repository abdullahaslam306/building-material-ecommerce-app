const express = require('express');
const { CreateEvent, ListEvents, DeleteEvent, CreateProduct } = require('../controllers');

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
router.get('/event/create', (req, res) => {
  res.render('admin/add-event');
});

router.post('/event/create', CreateEvent.upload.single('cover'), CreateEvent.create);


router.get('/event/list', ListEvents.list);

// router.get('/event/edit/:id', EditEvent.update);

router.get('/event/delete/:id', DeleteEvent.deleteEvent);

router.get('/create-product', (req, res) => {
  res.render('admin/product.ejs');
});

router.post('/create-product', CreateProduct.upload.single('image'), CreateProduct.create);

module.exports = router;

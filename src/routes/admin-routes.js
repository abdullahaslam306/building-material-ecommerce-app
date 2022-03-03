const express = require('express');
const {
  CreateEvent,
  ListEvents,
  DeleteEvent,
  CreateProduct,
  GetEvent,
  CreateUserRole,
  GetUserRole,
  ListUserRole,
  UpdateUserRole,
  DeleteUserRole,
  GetUser,
  ListUser,
  CreateUser,
  UpdateUser,
  DeleteUser,


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
router.get('/event/create', (req, res) => {
  res.render('admin/add-event');
});

router.post('/event/create', CreateEvent.upload.single('cover'), CreateEvent.create);


router.get('/event/list', ListEvents.list);

router.get('/event/edit/:id', GetEvent.getEvent);

router.get('/event/delete/:id', DeleteEvent.deleteEvent);


/**
 * User Roles Routes
 */

 router.get('/role/create', (req, res) => {
  res.render('admin/add-user-role');
});

router.post('/role/create', CreateUserRole.create);


router.get('/role/list', ListUserRole.list);

router.get('/role/edit/:id', GetUserRole.getUserRole);

router.get('/role/delete/:id', DeleteUserRole.deleteUserRole);

router.post('/role/update', UpdateUserRole.update);


/**
 * User Routes
 */

 router.get('/user/create', CreateUser.Load);

router.post('/user/create', CreateUser.create);


router.get('/user/list', ListUser.list);

router.get('/user/edit/:id', GetUser.getUserRole);

router.get('/user/delete/:id', DeleteUser.deleteUser);

router.post('/user/update', UpdateUser.update);

/**
 * Product Routes
 */
router.get('/create-product', (req, res) => {
  res.render('admin/product.ejs');
});

router.post('/create-product', CreateProduct.upload.single('image'), CreateProduct.create);

module.exports = router;

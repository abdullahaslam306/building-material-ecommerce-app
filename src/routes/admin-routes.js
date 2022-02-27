const express = require('express');
const { route } = require('express/lib/application');
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
  UpdateEvent,
  CreateCategory,
  ListCategory,
  DeleteCategory,
  UpdateCategory,
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
  res.render('admin/add-event', {success: null, error: null});
});

router.post('/event/create', CreateEvent.upload.single('cover'), CreateEvent.create);


router.get('/event/list', ListEvents.list);

router.get('/event/edit/:id', GetEvent.getEvent);

router.post('/event/update', UpdateEvent.upload.single('cover'),UpdateEvent.update)

router.get('/event/delete/:id', DeleteEvent.deleteEvent);


/**
 * User Roles Routes
 */

 router.get('/role/create', (req, res) => {
  res.render('admin/add-user-role', {success: null, error: null});
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
 * Category Routes
 */

router.get('/category/create', CreateCategory.loadCreatePage);
router.post('/category/create', CreateCategory.create);
router.get('/category/list', ListCategory.listAll);
router.get('/category/delete/:id', DeleteCategory.deleteCategory);
router.get('/category/edit/:id', UpdateCategory.loadUpdatePage);
router.post('/category/edit/', UpdateCategory.update);


/**
 * Product Routes
 */
router.get('/create-product', (req, res) => {
  res.render('admin/add-product.ejs', {success: null, error: null});
});

router.post('/create-product', CreateProduct.upload.single('image'), CreateProduct.create);

module.exports = router;

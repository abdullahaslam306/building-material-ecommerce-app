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
  UserLogin,
} = require('../controllers');

const router = express.Router();




const userAuthentication = (req, res, next) => {
  console.log('email', req.session.email)
  if(req.session.email)
  next();
  else
  {
    console.log(req.session)
    res.redirect('/admin/');
  }
}

const redirectAdminLogin = (req, res, next) => {
  console.log('here')
  console.log(req.session)
    if(req.session.type != 'admin')
    {
      res.redirect('/admin/dashboard')
    }
    else{
      next();
    }
  }

// admin login route
router.get('/', (req, res) => {
  res.render('admin/admin-login', {success: null, error: null});
});

router.post('/login', UserLogin.login);


router.get('/recover-password', (req, res) => {
  res.render('admin/recover-password');
});

router.get('/dashboard', userAuthentication,(req, res) => {
  res.render('admin/dashboard');
});
/**
 * Events Routes
 */
router.get('/event/create', userAuthentication,(req, res) => {
  res.render('admin/add-event', {success: null, error: null});
});

router.post('/event/create', userAuthentication, CreateEvent.upload.single('cover'), CreateEvent.create);


router.get('/event/list', userAuthentication,ListEvents.list);

router.get('/event/edit/:id', userAuthentication,GetEvent.getEvent);

router.post('/event/update', userAuthentication,UpdateEvent.upload.single('cover'),UpdateEvent.update)

router.get('/event/delete/:id', userAuthentication,DeleteEvent.deleteEvent);


/**
 * User Roles Routes
 */

 router.get('/role/create', (req, res) => {
  res.render('admin/add-user-role', {success: null, error: null});
});

router.post('/role/create', userAuthentication,CreateUserRole.create);


router.get('/role/list', userAuthentication,ListUserRole.list);

router.get('/role/edit/:id', userAuthentication,GetUserRole.getUserRole);

router.get('/role/delete/:id', userAuthentication,DeleteUserRole.deleteUserRole);

router.post('/role/update', userAuthentication,UpdateUserRole.update);


/**
 * User Routes
 */

 router.get('/user/create', redirectAdminLogin,(req, res) =>{
   res.render('admin/add-user', {success: null, error: null})
 });

router.post('/user/create',redirectAdminLogin ,CreateUser.create);


router.get('/user/list', redirectAdminLogin,ListUser.list);

router.get('/user/edit/:id', redirectAdminLogin,GetUser.getUserRole);

router.get('/user/delete/:id', redirectAdminLogin,DeleteUser.deleteUser);

router.post('/user/update', redirectAdminLogin,UpdateUser.update);

/**
 * Product Routes
 */
router.get('/create-product', userAuthentication,(req, res) => {
  res.render('admin/product.ejs', {success: null, error: null});
});

router.post('/create-product', userAuthentication,CreateProduct.upload.single('image'), CreateProduct.create);

module.exports = router;

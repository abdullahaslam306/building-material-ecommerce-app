const CreateEvent = require('./events/create');
const ListEvents = require('./events/list');
const DeleteEvent = require('./events/delete');
const GetEvent = require('./events/getEvent');

/**
 * Product
 */
const CreateProduct = require('./product/create');


/**
 * User Role
 */
const ListUserRole = require('./user-role/list');
 const CreateUserRole = require('./user-role/create');
 const UpdateUserRole = require('./user-role/update');
 const DeleteUserRole = require('./user-role/delete');
 const GetUserRole = require('./user-role/getUserRole');


 /**
 * User Role
 */
const ListUser = require('./users/list');
const CreateUser = require('./users/create');
const UpdateUser = require('./users/update');
const DeleteUser = require('./users/delete');
const GetUser = require('./users/getUser');


module.exports = {
  GetEvent,
  ListEvents,
  DeleteEvent,
  CreateEvent,
  CreateProduct,
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
};

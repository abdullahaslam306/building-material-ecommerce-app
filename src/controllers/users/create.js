const { database, repositories } = require('../../lib');

const create = async (req, res) => {
  try {
    const { name, email, user_role: roleId, password } = req.body;
    const connection = await database.openConnection();
    const userRepo = new repositories.Users(connection);

    await userRepo.create(name, email, password, roleId);
    res.redirect('/admin/user/create?success=User created successfully');
  } catch (exception) {
    console.log(exception);
    res.redirect('/admin/user/create?err='+exception.message);
  }
};

const Load = async (req, res) => {
  try {
    const connection = await database.openConnection();
    const userRoleRepo = new repositories.UserRole(connection);

    const roles = await userRoleRepo.listAll();
    res.render('admin/add-user', { roles, success: '', error: null });
  } catch (exception) {
    console.log(exception);
    res.render('admin/add-user', { roles: [],success: null, error: exception.message });
  }
};

module.exports = { create, Load };

const { database, repositories } = require('../../lib');

const getUserRole = async (req, res) => {
  try {
    const id = req.params.id || null;
    if( id === 'undefined' || id === null) {
        throw new Error('Provide valid identifier.');
    }
    const connection = await database.openConnection();
    const userRepo = new repositories.Users(connection);
    const userRoleRepo = new repositories.UserRole(connection);

    const roles = await userRoleRepo.listAll();

    const user = await userRepo.getById(id);
    res.render('admin/edit-user', { user, roles, success: '', error: null });
  } catch (exception) {
    console.log(exception)
    res.render('admin/edit-user', { user : {},roles: [], success: null, error: exception.message });
  }
};

module.exports = { getUserRole };
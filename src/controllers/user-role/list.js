const { database, repositories } = require('../../lib');

const list = async (req, res) => {
  try {
    const connection = await database.openConnection();
    const userRoleRepo = new repositories.UserRole(connection);

    const roles = await userRoleRepo.listAll();
    res.render('admin/manage-user-role', { roles, success: '', error: null });
  } catch (exception) {
    res.render('admin/manage-user-role', { roles : [], success: null, error: exception.message });
  }
};

module.exports = { list };
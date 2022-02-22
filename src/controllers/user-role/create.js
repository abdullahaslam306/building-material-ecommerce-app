const { database, repositories } = require('../../lib');

const create = async (req, res) => {
  try {
    const { create_access : create, update_access : update, delete_access: remove ,view_access : view, name } = req.body;
    const connection = await database.openConnection();
    const userRoleRepo = new repositories.UserRole(connection);

    await userRoleRepo.create(name, create, update, view, remove);
    res.render('admin/add-user-role', { success: 'User role created successfully', error: null });
  } catch (exception) {
    res.render('admin/add-user-role', { success: null, error: exception.message });
  }
};

module.exports = { create };

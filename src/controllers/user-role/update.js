const { database, repositories } = require('../../lib');

const update = async (req, res) => {
  try {
    const id = req.params.id || null;
    if( id === 'undefined' || id === null) {
        throw new Error('Provide valid identifier.');
    }
    const { create_access : create, update_access : update, delete_access: remove ,view_access : view, name } = req.body;
    const connection = await database.openConnection();
    const userRoleRepo = new repositories.UserRole(connection);

    await userRoleRepo.update(id ,name, create, update, view, remove);
    res.redirect("/admin/role/list?message =User role updated successfully");
  } catch (exception) {
    res.redirect("/admin/role/list?message =User role updated successfully");
  }
};

module.exports = { update };

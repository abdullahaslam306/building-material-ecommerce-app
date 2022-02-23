const { database, repositories } = require('../../lib');

const update = async (req, res) => {
    console.log('here')
  try {

    const { create_access : create, update_access : update, delete_access: remove ,view_access : view, role_name:name, id } = req.body;
    const connection = await database.openConnection();
    const userRoleRepo = new repositories.UserRole(connection);

    await userRoleRepo.update(id ,name, create, update, view, remove);
    res.redirect("/admin/role/list?message =User role updated successfully");
  } catch (exception) {
      console.log(exception);
    res.redirect("/admin/role/list?message =User role updated successfully");
  }
};

module.exports = { update };

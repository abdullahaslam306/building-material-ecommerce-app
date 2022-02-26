const { database, repositories } = require('../../lib');

const update = async (req, res) => {
    console.log('here')
  try {

    const { create_access : create, update_access : update, delete_access: remove ,view_access : view, role_name:name, id } = req.body;
    const connection = await database.openConnection();
    const userRoleRepo = new repositories.UserRole(connection);

    await userRoleRepo.update(id ,name, create, update, view, remove);
    res.redirect("/admin/role/list?success=User role updated successfully.");
  } catch (exception) {
    res.redirect("/admin/role/list?err=Unable to update event.");
  }
};

module.exports = { update };

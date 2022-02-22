const { database, repositories } = require("../../lib");

const deleteUserRole = async (req, res) => {
try {
  const id = req.params.id;
  console.log(typeof id)
  if (id === "undefined" || id === null) {
    throw new Error("Provide valid identifier.");
  }

  const connection = await database.openConnection();
  const userRoleRepo = new repositories.UserRole(connection);
  await userRoleRepo.delete(id);
  res.redirect("/admin/roles/list?message=User role deleted successfully");
} catch (exception) {
  res.redirect("/admin/roles/list?err=Unable to delete user role.");
}
};

module.exports = { deleteUserRole };

const { database, repositories } = require("../../lib");

const deleteUser = async (req, res) => {
try {
  const id = req.params.id;
  console.log(typeof id)
  if (id === "undefined" || id === null) {
    throw new Error("Provide valid identifier.");
  }

  const connection = await database.openConnection();
  const userRepo = new repositories.Users(connection);
  await userRepo.delete(id);
  res.redirect("/admin/user/list?message=User deleted successfully");
} catch (exception) {
  res.redirect("/admin/user/list?err=Unable to delete user.");
}
};

module.exports = { deleteUser };

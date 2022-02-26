const { database, repositories } = require('../../lib');

const update = async (req, res) => {
  try {

    const { name, email, user_role: roleId, password, id } = req.body;
    const connection = await database.openConnection();
    const UserRepo = new repositories.Users(connection);

    await UserRepo.update(id ,name, email, password, roleId);
    res.redirect("/admin/user/list?success=User updated successfully");
  } catch (exception) {
      console.log(exception);
    res.redirect("/admin/user/list?err="+exception.message);
  }
};

module.exports = { update };

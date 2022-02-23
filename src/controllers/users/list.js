const { database, repositories } = require('../../lib');

const list = async (req, res) => {
  console.log('here')
  try {
    const connection = await database.openConnection();
    const userRepo = new repositories.Users(connection);

    const users = await userRepo.listAll();
    res.render('admin/manage-user', { users, success: '', error: null });
  } catch (exception) {
    console.log(exception);
    res.render('admin/manage-user', { users : [], success: null, error: exception.message });
  }
};

module.exports = { list };
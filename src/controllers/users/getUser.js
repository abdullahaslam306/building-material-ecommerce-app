const { database, repositories } = require('../../lib');

const getUserRole = async (req, res) => {
  try {
    const id = req.params.id || null;
    if( id === 'undefined' || id === null) {
        throw new Error('Provide valid identifier.');
    }
    const connection = await database.openConnection();
    const userRepo = new repositories.Users(connection);

    const user = await userRepo.getByCriteria(id);

    if (!(user instanceof connection.users)) {
      throw new Error('User not found.');
    }
    
    res.render('admin/edit-user', { user, success: null, error: null });
  } catch (exception) {
    console.log(exception)
    res.render('admin/edit-user', { user : {}, success: null, error: exception.message });
  }
};

module.exports = { getUserRole };
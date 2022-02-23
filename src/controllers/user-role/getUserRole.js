const { database, repositories } = require('../../lib');

const getUserRole = async (req, res) => {
  try {
    const id = req.params.id || null;
    if( id === 'undefined' || id === null) {
        throw new Error('Provide valid identifier.');
    }
    const connection = await database.openConnection();
    const userRoleRepo = new repositories.UserRole(connection);

    const role = await userRoleRepo.getById(id);
    res.render('admin/edit-user-role', { role, success: '', error: null });
  } catch (exception) {
    console.log(exception)
    res.render('admin/edit-user-role', { role : {}, success: null, error: exception.message });
  }
};

module.exports = { getUserRole };
const { database, repositories } = require('../../lib');

const list = async (req, res) => {
  try {
    const { success, error } =  getMessage(req);
    const connection = await database.openConnection();
    const userRoleRepo = new repositories.UserRole(connection);

    const roles = await userRoleRepo.listAll();
    res.render('admin/manage-user-role', { roles, success, error });
  } catch (exception) {
    res.render('admin/manage-user-role', { roles : [], success, error: exception.message });
  }
};

const getMessage = (request) =>{
  if(request.query) {
    if(request.query.success) { 
      console.log(request.query.success)
      return { success: request.query.success, error: null }
    }
    else if(request.query.err){ return { error: request.query.err, sucess:null }}
  }
    return { success: null, error:null}
}

module.exports = { list };
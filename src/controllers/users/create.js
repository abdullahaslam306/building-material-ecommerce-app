const { database, repositories } = require('../../lib');

const create = async (req, res) => {
  try {
    const { name, email, user_role: roleId, password } = req.body;
    const connection = await database.openConnection();
    const userRepo = new repositories.Users(connection);

    await userRepo.create(name, email, password, roleId);
    res.redirect('/admin/user/create?success=User created successfully');
  } catch (exception) {
    console.log(exception);
    res.redirect('/admin/user/create?err='+exception.message);
  }
};

const Load = async (req, res) => {
  try {
    const { success, error } =  getMessage(req);
    const connection = await database.openConnection();
    const userRoleRepo = new repositories.UserRole(connection);

    const roles = await userRoleRepo.listAll();
    res.render('admin/add-user', { roles, success, error });
  } catch (exception) {
    console.log(exception);
    res.render('admin/add-user', { roles: [],success, error: exception.message });
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

module.exports = { create, Load };

const { database, repositories } = require('../../lib');

const list = async (req, res) => {
  try {
    console.log(req.session.username)
    const { success, error } =  getMessage(req);
    const connection = await database.openConnection();
    const userRepo = new repositories.Users(connection);

    const users = await userRepo.listAll();
    res.render('admin/manage-user', { users, success , error });
  } catch (exception) {
    console.log(exception);
    res.render('admin/manage-user', { users : [], success:null, error: exception.message });
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
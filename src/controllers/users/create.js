const bcrypt = require('bcrypt');
const { database, repositories } = require('../../lib');

const create = async (req, res) => {
  try {
    const { name, email, user_role, password } = req.body;
    const connection = await database.openConnection();
    const userRepo = new repositories.Users(connection);

    const salt = await bcrypt.genSalt(10);
    const hasedpassword = await bcrypt.hash(password, salt);

    await userRepo.create(name, email, hasedpassword, user_role);
    res.render('admin/add-user', {  success: 'User created successfully', error:null });
  } catch (exception) {
    console.log(exception);
    res.render('admin/add-user', {success: null, error: exception.message });
  }
};

// const Load = async (req, res) => {
//   try {
//     const { success, error } =  getMessage(req);

//     res.render('admin/add-user', {  success, error });
//   } catch (exception) {
//     console.log(exception);
//     res.render('admin/add-user', {success, error: exception.message });
//   }
// };


// const getMessage = (request) =>{
//   if(request.query) {
//     if(request.query.success) { 
//       console.log(request.query.success)
//       return { success: request.query.success, error: null }
//     }
//     else if(request.query.err){ return { error: request.query.err, sucess:null }}
//   }
//     return { success: null, error:null}
// }

module.exports = { create };

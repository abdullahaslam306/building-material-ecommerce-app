const bcrypt = require('bcrypt');
const { database, repositories } = require('../../lib');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const connection = await database.openConnection();
    const userRepo = new repositories.Users(connection);

    const user = await userRepo.getByCriteria(null, email);

    if(!user) {
        throw new Error('No user exists for given email')
    }

    const isLoggedIn =  bcrypt.compareSync(password, user.password) 

    if(!isLoggedIn) {
        throw new Error('Incorrect email/password.')
    }

    req.session.email = user.email;
    req.session.username = user.name;
    req.session.type = user.user_role;
    console.log(req.session)
    res.redirect('/admin/dashboard');
  } catch (exception) {
    console.log(exception);
    res.render('admin/admin-login',{success: null, error: exception.message });
  }
};

module.exports = { login };

/**
 * Class to access and manage user
 */
 const bcrypt = require('bcrypt');
 class Users {

    constructor(dbConnection) {
      this.dbInstance = dbConnection;
    }
  
    async create(name, email, password, user_role) {
      const user = await this.dbInstance.users.create({
       name,
       email,
       password,
       user_role
      });
      if (!(user instanceof this.dbInstance.users)) {
        throw new Error('Unable to create user.');
      }
      return user;
    }
  
    async update(id ,name, email, password, user_role) {
      const where = {
        id
      }
      const attributeToUpdate = {
        name,
        email,
        user_role,
      }
      if(password !== null && password.length > 0) {
        const salt = await bcrypt.genSalt(10);
        const hasedpassword = await bcrypt.hash(password, salt)
        attributeToUpdate.password = hasedpassword;
      }

      const user = await this.dbInstance.users.update(attributeToUpdate, { where });
      return user;
    }
  
    async listAll() {
      const users = await this.dbInstance.users.findAll();
      if ((users === null || users.length === 0)) {
        throw new Error('No user exist.');
      }
      return users;
    }
  
    async getByCriteria(id = null, email = null) {
      let where = {};
      if(id !== null) {
        where.id = id;
      }
      if(email !== null) {
        where.email = email;
      } 
      const user = await this.dbInstance.users.findOne({where});
     
      return user;
    }
  
    async delete(id) {
      const where = { id };
      await this.dbInstance.users.destroy({ where });
    }
  
    }
    module.exports = Users;
/**
 * Class to access and manage user
 */

 class Users {

    constructor(dbConnection) {
      this.dbInstance = dbConnection;
    }
  
    async create(name, email, password, user_role_id) {
      const user = await this.dbInstance.users.create({
       name,
       email,
       password,
       user_role_id,
      });
      if (!(user instanceof this.dbInstance.users)) {
        throw new Error('Unable to create user.');
      }
      return user;
    }
  
    async update(id ,name, email, password, user_role_id) {
      const where = {
        id
      }
      const user = await this.dbInstance.users.update({
        name,
       email,
       password,
       user_role_id,
      }, { where });
      return user;
    }
  
    async listAll() {
        // Join with user role
    const include = { 
        model : this.dbInstance.user_roles,
        required : true// making inner join
    }
      const users = await this.dbInstance.users.findAll({ include });
      if ((users === null || users.length === 0)) {
        throw new Error('User role not found.');
      }
      return users;
    }
  
    async getById(id) {
      const where = { id };
      const include = { 
        model : this.dbInstance.user_roles,
        required : true, // making inner join
    }
      const user = await this.dbInstance.users.findOne({where, include});
      if (!(user instanceof this.dbInstance.users)) {
        throw new Error('User not found.');
      }
      return user;
    }
  
    async delete(id) {
      const where = { id };
      await this.dbInstance.users.destroy({ where });
    }
  
    }
    module.exports = Users;
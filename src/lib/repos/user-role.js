/**
 * Class to access and manage user roles
 */

class UserRole {

  constructor(dbConnection) {
    this.dbInstance = dbConnection;
  }

  async create(name, create_privilidge, update_privilidge, access_privilidge, delete_privilidge) {
    const userRole = await this.dbInstance.user_roles.create({
      name,
      create_privilidge,
      update_privilidge,
      access_privilidge,
      delete_privilidge,
    });
    console.log(userRole)
    if (!(userRole instanceof this.dbInstance.user_roles)) {
      throw new Error('Unable to create role.');
    }
    return userRole;
  }

  async update(id ,name, create_privilidge, update_privilidge, access_privilidge, delete_privilidge) {
    const where = {
      id
    }
    const userRole = await this.dbInstance.user_roles.update({
      name,
      create_privilidge,
      update_privilidge,
      access_privilidge,
      delete_privilidge,
    }, { where });
    console.log(userRole)
    if (!(userRole instanceof this.dbInstance.user_roles)) {
      throw new Error('Unable to update role.');
    }
    return userRole;
  }

  async listAll() {
    const roles = await this.dbInstance.user_roles.findAll();

    if ((roles === null || roles.length === 0)) {
      throw new Error('User role not found.');
    }
    return roles;
  }

  async getById(id) {
    const where = { id };
    const userRole = await this.dbInstance.user_roles.findOne({where});
    if (!(userRole instanceof this.dbInstance.user_roles)) {
      throw new Error('Userole not found.');
    }
    console.log(userRole)
    return userRole;
  }

  async delete(id) {
    const where = { id };
    await this.dbInstance.user_roles.destroy({ where });
  }

  }
  module.exports = UserRole;
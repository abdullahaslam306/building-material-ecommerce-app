/**
 * Class to access and manage events
 */

const { Op } = require('sequelize');

class Category {
  constructor(dbConnection) {
    this.dbInstance = dbConnection;
  }

  async create(name, parent, level) {
    const category = await this.dbInstance.categories.create({
      name,
      level,
      parent,
    });

    if (!(category instanceof this.dbInstance.categories)) {
      throw new Error('Unable to create category.');
    }
    return category;
  }

  async listAll() {
    const include = {
      model: this.dbInstance.categories,
      as: 'parentData',
    };

    const categories = await this.dbInstance.categories.findAll({include});
    console.log('here', categories[0].category_child);
    if ((categories === null || categories.length === 0)) {
      throw new Error('Exception in listing category.');
    }
    return categories;
  }

  async listParentCategories() {
    const where = {
      level: {
        [Op.ne]: 2,
      },
    };
    const categories = await this.dbInstance.categories.findAll({ where });
    if ((categories === null || categories.length === 0)) {
      throw new Error('Exception in listing category.');
    }
    return categories;
  }

  async listCategoriesForProductSelection() {
    const where = {
      level: {
        [Op.ne]: 0,
      },
    };
    const events = await this.dbInstance.categories.findAll({ where });
    console.log(events);
    if ((events === null || events.length === 0)) {
      throw new Error('Exception in listing category.');
    }
    return events;
  }

  async getById(id) {
    const where = { id };
    const category = await this.dbInstance.categories.findOne({ where });
    console.log(category);
    if ((category === null || category.length === 0)) {
      throw new Error('Exception in getting category.');
    }
    return category;
  }

  async delete(id) {
    const where = { id };
    await this.dbInstance.categories.destroy({ where });
  }

  async update(id, name, parent, level) {
    const where = { id };

    const updatedRows = await this.dbInstance.categories.update({
      name,
      level,
      parent,
    }, { where });

    if (!updatedRows) {
      throw new Error('Unable to update category.');
    }
    return updatedRows;
  }
}

module.exports = Category;

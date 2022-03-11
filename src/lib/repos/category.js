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
    console.log(category);
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

    const categories = await this.dbInstance.categories.findAll({ include });

    if (categories === null || categories.length === 0) {
      throw new Error('No Categories Found.');
    }
    return categories;
  }

  removeSemiParent(categories) {
    let filteredCategories = [];
    for (const category of categories) {
      let flag = true;
      for (const category1 of categories) {
        if (category1.parent === category.id) {
          flag = false;
        }
      }
      if (flag) filteredCategories.push(category);
    }

    return filteredCategories;
  }

  async listParentCategories() {
    const where = {
      level: {
        [Op.ne]: 2,
      },
    };
    const categories = await this.dbInstance.categories.findAll({ where });
    if (categories === null || categories.length === 0) {
      throw new Error('Categories Not found.');
    }

    return categories;
  }

  async listCategoriesForProductSelection() {
    const where = {
      level: {
        [Op.ne]: 0,
      },
    };
    let categories = await this.dbInstance.categories.findAll({ where });
    console.log(categories);
    if (categories === null || categories.length === 0) {
      throw new Error('Exception in listing category.');
    }
    categories = this.removeSemiParent(categories);
    return categories;
  }

  async getProductsByCategory(id) {
    const category = await this.getByIdWithChildren(id);
    if (category.level === 2) {
      const where = { category: category.id };
      const products = await this.dbInstance.product.findAll({ where });
      return products;
    }

    const allProducts = [];
    for await (const subCategory of category.children) {
      const where = { category: subCategory.id };
      const products = await this.dbInstance.product.findAll({ where });
      for (const product of products) {
        allProducts.push(product);
      }
    }
    return allProducts;
  }

  async getProducts(categorId) {}

  async getCategoriesList() {
    const include = {
      model: this.dbInstance.categories,
      as: 'children',
    };
    const categories = await this.dbInstance.categories.findAll({ include });
    console.log(categories);
    if (categories === null || categories.length === 0) {
      throw new Error('Exception in getting category.');
    }

    return categories;
  }

  async getById(id) {
    const include = {
      model: this.dbInstance.categories,
      as: 'parentData',
    };
    const where = { id };
    const category = await this.dbInstance.categories.findOne({
      include,
      where,
    });
    console.log(category);
    if (category === null || category.length === 0) {
      throw new Error('Exception in getting category.');
    }
    return category;
  }

  async getByIdWithChildren(id) {
    const include = {
      model: this.dbInstance.categories,
      as: 'children',
    };
    const where = { id };
    const category = await this.dbInstance.categories.findOne({
      include,
      where,
    });
    console.log(category);
    if (category === null || category.length === 0) {
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

    const updatedRows = await this.dbInstance.categories.update(
      {
        name,
        level,
        parent,
      },
      { where },
    );

    if (!updatedRows) {
      throw new Error('Unable to update category.');
    }
    return updatedRows;
  }
}

module.exports = Category;

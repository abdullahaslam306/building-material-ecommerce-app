/**
 * Class to access and manage products
 */

class Product {
  constructor(dbConnection) {
    this.dbInstance = dbConnection;
  }

  async createProduct(name, desc, link, image, category, properties) {
    const product = await this.dbInstance.product.create({
      name,
      desc,
      link,
      image,
      category,
      properties,
    });

    if (!(product instanceof this.dbInstance.product)) {
      throw new Error('Unable to create product');
    }
    return product;
  }

  async listAll() {
    const include = {
      model: this.dbInstance.categories,
      as: 'categoryData',
      required: true,
    };
    const products = await this.dbInstance.product.findAll({ include });
    if ((products === null || products.length === 0)) {
      throw new Error('Exception in listing products.');
    }
    return products;
  }

  async delete(id) {
    const where = { id };
    const deletedRows = await this.dbInstance.product.destroy({ where });
    if (!deletedRows) throw new Error('Unable to delete the product');
    return deletedRows;
  }

  async getById(id) {
    const include = {
      model: this.dbInstance.categories,
      as: 'categoryData',
      required: true,
    };
    const where = { id };
    const product = await this.dbInstance.product.findOne({ include, where });
    console.log(product);
    if (!(product instanceof this.dbInstance.product)) {
      throw new Error('Product not found.');
    }
    return product;
  }

  async update(id, name, desc, link, image, category, properties) {
    const where = { id };
    const product = await this.dbInstance.product.update({
      name,
      desc,
      link,
      image,
      category,
      properties,
    }, { where });

    if (!product) {
      throw new Error('Unable to create product');
    }
    return product;
  }
}

module.exports = Product;

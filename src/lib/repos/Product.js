/**
 * Class to access and manage products
 */

class Product {
  constructor(dbConnection) {
    this.dbInstance = dbConnection;
  }

  async createProduct(name, desc, link, image,category, properties) {
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
}

module.exports = Product;

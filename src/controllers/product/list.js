const { database, repositories } = require('../../lib');

function mapJsonToArray(props) {
  const properties = JSON.parse(props);
  const keys = Object.keys(properties);
  const values = Object.values(properties);
  const prop = new Array();
  for (let i = 0; i < keys.length; i++) {
    prop.push({ 'key': keys[i], 'value': values[i] });
  }
  return prop;
}
const getMessage = (request) => {
  if (request.query) {
    if (request.query.success) {
      console.log(request.query.success);
      return { success: request.query.success, error: null };
    }
    if (request.query.err) { return { error: request.query.err, success: null }; }
  }

  return { success: null, error: null };
};

const listAll = async (req, res) => {
  try {
    const { success, error } = getMessage(req);

    const connection = await database.openConnection();

    const productRepo = new repositories.Product(connection);

    const products = await productRepo.listAll();
      
    await database.closeConnection(connection);

    res.render('admin/manage-product', { products, success, error });
  } catch (exception) {
    res.render('admin/manage-product', { products: [], success: null, error: exception.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { success, error } = getMessage(req);

    const connection = await database.openConnection();

    const productRepo = new repositories.Product(connection);

    const product = await productRepo.getById(req.params.id);

    const properties = mapJsonToArray(product.properties);

    await database.closeConnection(connection);

    res.render('customer/productDetail', {
      categories: res.locals.categories, product, properties, success, error,
    });
  } catch (exception) {
    res.render('customer/productDetail', {
      categories: res.locals.categories, product: [], properties: null, success: null, error: exception.message,
    });
  }
};

module.exports = { listAll, getProduct };

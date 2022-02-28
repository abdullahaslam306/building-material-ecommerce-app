const multer = require('multer');
const { database, repositories } = require('../../lib');

const mapPropertiesIntoJson = (propertiesKeys, propertiesValues) => {
  const properties = {};
  if(!Array.isArray(propertiesValues)) {
    propertiesKeys = new Array([propertiesKeys]);
    propertiesValues = new Array([propertiesValues]);
  }
  else
  {
    propertiesKeys = new Array(propertiesKeys);
    propertiesValues = new Array(propertiesValues);
  }
  for (let i = 0; i < propertiesKeys[0].length; i++) {
    properties[propertiesKeys[0][i]] = propertiesValues[0][i];
  }
  return JSON.stringify(properties);
};

const create = async (req, res) => {
  try {
    const {
      name, desc, link, category, propertiesKeys, propertiesValues,
    } = req.body;
    const image = `/uploads/${req.file.filename}`;
    const connection = await database.openConnection();
    const properties = mapPropertiesIntoJson(propertiesKeys, propertiesValues);
    const productRepo = new repositories.Product(connection);
    await productRepo.createProduct(name, desc, link, image, category, properties);
    const categoryRepo = new repositories.Category(connection);
    const categories = await categoryRepo.listCategoriesForProductSelection();
    await database.closeConnection(connection);


    res.render('admin/add-product', { categories, success: 'Product created successfully', error: null });
  } catch (exception) {
    res.render('admin/add-product', { categories: [], success: null, error: exception.message });
  }
};

const loadCreatePage = async (req, res) => {
  try {
    const connection = await database.openConnection();

    const categoryRepo = new repositories.Category(connection);

    const categories = await categoryRepo.listCategoriesForProductSelection();

    await database.closeConnection(connection);

    res.render('admin/add-product', { categories, success: null, error: null });
  } catch (exception) {
    res.render('admin/add-product', { categories: [], success: null, error: exception.message });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `product-${Date.now()}`);
  },
});

const upload = multer({ storage });

module.exports = { create, upload, loadCreatePage };

const multer = require('multer');
const { database, repositories } = require('../../lib');

const mapPropertiesIntoJson = (propertiesKeys, propertiesValues) => {
  const properties = {};
  propertiesKeys = new Array([propertiesKeys]);
  propertiesValues = new Array([propertiesValues]);
  for (let i = 0; i < propertiesKeys.length; i++) {
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
    // TODO: Replace Category ID when Category work is done.
    await productRepo.createProduct(name, desc, link, image, 1, properties);

    res.render('admin/add-product', { success: 'Product created successfully', error: null });
  } catch (exception) {
    res.render('admin/add-product', { success: null, error: exception.message });
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

module.exports = { create, upload };

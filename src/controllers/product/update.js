const { database, repositories } = require('../../lib');
const multer = require('multer');

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

const update = async (req, res) => {
  try {
    const {
      id, image, name, desc, link, category, propertiesKeys, propertiesValues,
    } = req.body;
    let fileName = image;
    if (req.file) {
      fileName = `/uploads/${req.file.filename}`;
    }
    const connection = await database.openConnection();
    const properties = mapPropertiesIntoJson(propertiesKeys, propertiesValues);
    const productRepo = new repositories.Product(connection);
    await productRepo.update(id, name, desc, link, fileName, category, properties);

    await database.closeConnection(connection);

    res.redirect('/admin/product/list?success=Product updated successfully');
  } catch (exception) {
    res.redirect(`/admin/product/list?err=Unable to update the Product, ${exception}`);
  }
};

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

const loadUpdatePage = async (req, res) => {
  try {
    const { id } = req.params;

    const connection = await database.openConnection();

    const productRepo = new repositories.Product(connection);

    const product = await productRepo.getById(id);

    const properties = mapJsonToArray(product.properties);

    const categoryRepo = new repositories.Category(connection);

    const categories = await categoryRepo.listParentCategories();

    await database.closeConnection(connection);

    res.render('admin/edit-product', {
      properties, product, categories, success: null, error: null,
    });
  } catch (exception) {
    res.redirect(`/admin/product/list?err=Unable to update product. Error :${exception}`);
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


module.exports = { update, loadUpdatePage, upload };

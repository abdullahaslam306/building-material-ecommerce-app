const { database, repositories } = require('../../lib');
const multer = require('multer');

const create = async (req, res) => {
  try {
    let level = 0;

    let id = null;

    // eslint-disable-next-line prefer-const
    let { name, parent } = req.body;
    const fileName = `/uploads/${req.file.filename}`;
    const connection = await database.openConnection();

    const categoryRepo = new repositories.Category(connection);

    if (parent) {
      const parentData = await categoryRepo.getById(parent);
      id = parentData.id;
      level = parentData.level + 1;
    }

    await categoryRepo.create(name, id, level, fileName);

    const categories = await categoryRepo.listParentCategories();

    await database.closeConnection(connection);

    res.render('admin/add-category', { categories, success: 'Category created successfully', error: null });
  } catch (exception) {
    res.render('admin/add-category', { categories: [], success: null, error: exception.message });
  }
};

const loadCreatePage = async (req, res) => {
  try {
    const connection = await database.openConnection();

    const categoryRepo = new repositories.Category(connection);

    const categories = await categoryRepo.listParentCategories();

    await database.closeConnection(connection);

    console.log(categories);

    res.render('admin/add-category', { categories, success: null, error: null });
  } catch (exception) {
    res.render('admin/add-category', { categories: [], success: null, error: exception.message });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `category-${Date.now()}`);
  },
});

const upload = multer({ storage });



module.exports = { create, loadCreatePage,upload };

const multer = require('multer');
const { database, repositories } = require('../../lib');

const update = async (req, res) => {
  try {
    // eslint-disable-next-line prefer-const
    let {
      name, parent, id, level,
    } = req.body;

    let parentId = Number.parseInt(parent);

    const connection = await database.openConnection();
    let filename = null;
    if (req.file) {
      filename = `/uploads/${req.file.filename}`;
    }
    const categoryRepo = new repositories.Category(connection);

    if (parent) {
      const parentData = await categoryRepo.getById(parent);
      parentId = parentData.id;
      level = parentData.level + 1;
    }

    await categoryRepo.update(id, name, parentId, level,filename);

    await database.closeConnection(connection);

    res.redirect('/admin/category/list?success=Category Updated Successfully');
  } catch (exception) {
    res.redirect(`/admin/category/list?err=Unable to update Category. Error${exception}`);
  }
};

const loadUpdatePage = async (req, res) => {
  try {
    const { id } = req.params;

    const connection = await database.openConnection();

    const categoryRepo = new repositories.Category(connection);

    const categories = await categoryRepo.listParentCategories();

    const categoryToUpdate = await categoryRepo.getById(id);

    await database.closeConnection(connection);

    res.render('admin/edit-category', {
      categoryToUpdate, categories, success: null, error: null,
    });
  } catch (exception) {
    res.redirect(`/admin/category/list?err=Unable to update event. Error :${exception}`);
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


module.exports = { update, loadUpdatePage, upload };

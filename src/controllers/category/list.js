const { database, repositories } = require('../../lib');

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

    const categoryRepo = new repositories.Category(connection);

    const categories = await categoryRepo.listAll();

    await database.closeConnection(connection);

    res.render('admin/manage-category', { categories, success, error });
  } catch (exception) {
    res.render('admin/manage-category', { categories: [], success: [], error: exception.message });
  }
};


module.exports = { listAll };

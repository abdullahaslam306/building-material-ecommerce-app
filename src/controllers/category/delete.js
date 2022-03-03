const { database, repositories } = require('../../lib');

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(typeof id);
    if (id === 'undefined' || id === null) {
      throw new Error('Provide valid identifier.');
    }

    const connection = await database.openConnection();
    const categoryRepo = new repositories.Category(connection);
    await categoryRepo.delete(id);
    res.redirect('/admin/category/list?success=Category deleted successfully');
  } catch (exception) {
    res.redirect('/admin/category/list?err=Unable to delete the Category');
  }

};

module.exports = { deleteCategory };

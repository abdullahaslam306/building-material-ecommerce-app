const { database, repositories } = require('../../lib');

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(typeof id);
    if (id === 'undefined' || id === null) {
      throw new Error('Provide valid identifier.');
    }

    const connection = await database.openConnection();
    const productRepo = new repositories.Product(connection);
    await productRepo.delete(id);
    res.redirect('/admin/product/list?success=Product deleted successfully');
  } catch (exception) {
    res.redirect('/admin/product/list?err=Unable to delete the Product');
  }

};

module.exports = { deleteProduct };

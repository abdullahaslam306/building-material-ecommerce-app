const { database, repositories } = require('../../lib');

const getMessage = (request) => {
  if (request.query) {
    if (request.query.success) {
      console.log(request.query.success);
      return { success: request.query.success, error: null };
    }
    if (request.query.err) {
      return { error: request.query.err, success: null };
    }
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
    res.render('admin/manage-category', {
      categories: [],
      success: null,
      error: exception.message,
    });
  }
};

const listNav = async (req, res) => {
  try {
    const { success, error } = getMessage(req);

    const connection = await database.openConnection();

    const categoryRepo = new repositories.Category(connection);

    const categories = await categoryRepo.getCategoriesList();

    await database.closeConnection(connection);

    res.render('customer/index', { categories, success, error });
  } catch (exception) {
    res.render('customer/index', {
      categories: [],
      success: null,
      error: exception.message,
    });
  }
};

const listCategoriesNavbar = async (req, res) => {
  try {
    const connection = await database.openConnection();

    const categoryRepo = new repositories.Category(connection);

    const categories = await categoryRepo.getCategoriesList();

    await database.closeConnection(connection);

    return categories;
  } catch (exception) {
    console.log(exception);
  }
};

const listProductByCategory = async (req, res) => {
  try {
    const { success, error } = getMessage(req);

    const connection = await database.openConnection();

    const categoryRepo = new repositories.Category(connection);

    const category = await categoryRepo.getById(req.params.id);

    const products = await categoryRepo.getProductsByCategory(req.params.id);


    await database.closeConnection(connection);

    res.render('customer/productlist', {
      products,
      categories: res.locals.categories,
      categoryName: category.name,
      success: null,
      error: null,
    });
  } catch (exception) {
    res.render('customer/index', {
      categories: [],
      success: null,
      error: exception.message,
    });
  }
};

const listSubCategories = async (req, res) => {

    const connection = await database.openConnection();

    const categoryRepo = new repositories.Category(connection);

    const { children } = await categoryRepo.getByIdWithChildren(req.params.id);
      console.log(children);
    if(children.length > 0) { 
      res.render('customer/categoryList', {subCategories : children});
    }
    else {
      res.redirect('/category/products/'+req.params.id);
    }
}


module.exports = {
  listAll, listNav, listProductByCategory, listCategoriesNavbar, listSubCategories
};

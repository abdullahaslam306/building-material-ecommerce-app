const express = require('express');
const { ListCategory, ListProduct,  } = require('../controllers');

const router = express.Router();

const {
  GetEvent,
  ListEvents,
} = require('../controllers');

const loadNav = async (req, res, next) => {
  res.locals.categories = await ListCategory.listCategoriesNavbar();
  next();
};

router.get('/', ListCategory.listNav);


router.get('/faqs', loadNav, (req, res) => {
  res.render('customer/faqs', { categories: res.locals.categories });
});

router.get('/contact-us', loadNav,(req, res) => {
  res.render('customer/contactus', { categories: res.locals.categories });
});
// user routes
router.get('/privacy/policy',loadNav, (req, res) => {
  res.render('customer/privacy-policy', { categories: res.locals.categories });
});

router.get('/about-us', loadNav, (req, res) => {
  res.render('customer/aboutus', { categories: res.locals.categories });
});

router.get('/event/details/:id',loadNav, GetEvent.getPublicEvent);

router.get('/event-news', loadNav , ListEvents.listNews);

router.get('/category/products/:id', loadNav, ListCategory.listProductByCategory);
router.get('/product/:id', loadNav, ListProduct.getProduct);

module.exports = router;

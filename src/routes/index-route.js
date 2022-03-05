const express = require('express');

const router = express.Router();

const {
  GetEvent,
  ListEvents,
  } = require('../controllers');

const navValues = () => {
  return   [
      {
        name: 'Category 1',
        children: [
          {
            name: 'Sub 1',
          },
          {
            name: 'Sub 2',
          },
          {
            name: 'Sub 3',
          },
          {
            name: 'Sub 4',
          },
        ],
      },
      {
        name: 'Category 2',
        children: [
          {
            name: 'Sub 1',
          },
          {
            name: 'Sub 2',
          },
          {
            name: 'Sub 3',
          },
          {
            name: 'Sub 4',
          },
        ],
      },
      {
        name: 'Category 3',
        children: [
          {
            name: 'Sub 1',
          },
          {
            name: 'Sub 2',
          },
          {
            name: 'Sub 3',
          },
          {
            name: 'Sub 4',
          },
        ],
      },
      {
        name: 'Category 4',
        children: [
          {
            name: 'Sub 1',
          },
          {
            name: 'Sub 2',
          },
          {
            name: 'Sub 3',
          },
          {
            name: 'Sub 4',
          },
        ],
      },
      {
        name: 'Category 5',
        children: [
          {
            name: 'Sub 1',
          },
          {
            name: 'Sub 2',
          },
          {
            name: 'Sub 3',
          },
          {
            name: 'Sub 4',
          },
        ],
      },
      {
        name: 'Category 6',
        children: [
          {
            name: 'Sub 1',
          },
          {
            name: 'Sub 2',
          },
          {
            name: 'Sub 3',
          },
          {
            name: 'Sub 4',
          },
        ],
      },
      {
        name: 'Category 7',
        children: [
          {
            name: 'Sub 1',
          },
          {
            name: 'Sub 2',
          },
          {
            name: 'Sub 3',
          },
          {
            name: 'Sub 4',
          },
        ],
      },
    ]
}

router.get('/faqs',(req, res) => {
  res.render('customer/faqs',{ categories: navValues()})
})

router.get('/contact-us',(req, res) => {
  res.render('customer/contactus',{ categories: navValues()})
})
// user routes
router.get('/privacy/policy',(req, res) => {
  res.render('customer/privacy-policy',{ categories: navValues()})
})

router.get('/about-us',(req, res) => {
  res.render('customer/aboutus',{ categories: navValues()})
})

router.get('/event/details/:id', GetEvent.getPublicEvent)

router.get('/event-news', ListEvents.listNews);
router.get('/', (req, res) => {
  res.render('customer/index',
    {
      categories: [
        {
          name: 'Category 1',
          children: [
            {
              name: 'Sub 1',
            },
            {
              name: 'Sub 2',
            },
            {
              name: 'Sub 3',
            },
            {
              name: 'Sub 4',
            },
          ],
        },
        {
          name: 'Category 2',
          children: [
            {
              name: 'Sub 1',
            },
            {
              name: 'Sub 2',
            },
            {
              name: 'Sub 3',
            },
            {
              name: 'Sub 4',
            },
          ],
        },
        {
          name: 'Category 3',
          children: [
            {
              name: 'Sub 1',
            },
            {
              name: 'Sub 2',
            },
            {
              name: 'Sub 3',
            },
            {
              name: 'Sub 4',
            },
          ],
        },
        {
          name: 'Category 4',
          children: [
            {
              name: 'Sub 1',
            },
            {
              name: 'Sub 2',
            },
            {
              name: 'Sub 3',
            },
            {
              name: 'Sub 4',
            },
          ],
        },
        {
          name: 'Category 5',
          children: [
            {
              name: 'Sub 1',
            },
            {
              name: 'Sub 2',
            },
            {
              name: 'Sub 3',
            },
            {
              name: 'Sub 4',
            },
          ],
        },
        {
          name: 'Category 6',
          children: [
            {
              name: 'Sub 1',
            },
            {
              name: 'Sub 2',
            },
            {
              name: 'Sub 3',
            },
            {
              name: 'Sub 4',
            },
          ],
        },
        {
          name: 'Category 7',
          children: [
            {
              name: 'Sub 1',
            },
            {
              name: 'Sub 2',
            },
            {
              name: 'Sub 3',
            },
            {
              name: 'Sub 4',
            },
          ],
        },
      ],
    });
});
module.exports = router;

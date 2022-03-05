const express = require('express');

const router = express.Router();


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

// user routes

router.get('/event-news',(req, res) => {
  res.render('customer/news-event', { categories : navValues() })
})
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

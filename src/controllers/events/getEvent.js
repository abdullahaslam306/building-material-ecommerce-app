const { database, repositories } = require('../../lib');

const getEvent = async (req, res) => {
  try {
    const id = req.params.id || null;
    if( id === 'undefined' || id === null) {
        throw new Error('Provide valid identifier.');
    }
    console.log(id)
    const connection = await database.openConnection();
    const eventRepo = new repositories.Event(connection);

    const event = await eventRepo.getById(id);
    res.render('admin/edit-event', { event, success: null, error: null });
  } catch (exception) {
    console.log(exception)
    res.render('admin/edit-event', { event : {}, success: null, error: exception.message });
  }
};

const getPublicEvent = async (req, res) => {
  try {
    const id = req.params.id || null;
    if( id === 'undefined' || id === null) {
        throw new Error('Provide valid identifier.');
    }
    console.log(id)
    const connection = await database.openConnection();
    const eventRepo = new repositories.Event(connection);

    const event = await eventRepo.getById(id);
    res.render('customer/event-details', { event, categories : navValues() ,success: null, error: null });
  } catch (exception) {
    console.log(exception)
    res.render('customer/event-details', { event : {}, success: null, error: exception.message });
  }
};
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

module.exports = { getEvent, getPublicEvent };
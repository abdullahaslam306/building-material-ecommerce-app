const { database, repositories } = require('../../lib');

const list = async (req, res) => {

  try {

    const { success, error } =  getMessage(req);

    const connection = await database.openConnection();
    const eventRepo = new repositories.Event(connection);

    const events = await eventRepo.listAll();
    res.render('admin/manage-events', { events, success, error });
  } catch (exception) {
    console.log(exception)
    res.render('admin/manage-events', { events : [], success: null, error: exception.message });
  }
};

const listNews = async (req, res) => {

  try {
    const connection = await database.openConnection();
    const eventRepo = new repositories.Event(connection);

    const events = await eventRepo.listAll();
    res.render('customer/news-event', { categories : navValues(), events })
  } catch (exception) {
    res.render('customer/news-event', { categories : navValues(), events : [] })
  }

}

const getMessage = (request) =>{
  if(request.query) {
    if(request.query.success) {
      console.log(request.query.success)
      return { success: request.query.success, error: null }
    }
    else if(request.query.err){ return { error: request.query.err, sucess:null }}
  }

    return { success: null, error:null}

}

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


module.exports = { list, listNews };

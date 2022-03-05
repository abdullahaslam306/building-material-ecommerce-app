const { database, repositories } = require('../../lib');

const getEvent = async (req, res) => {
  try {
    const id = req.params.id || null;
    if (id === 'undefined' || id === null) {
      throw new Error('Provide valid identifier.');
    }
    console.log(id);
    const connection = await database.openConnection();
    const eventRepo = new repositories.Event(connection);

    const event = await eventRepo.getById(id);
    res.render('admin/edit-event', { event, success: null, error: null });
  } catch (exception) {
    console.log(exception);
    res.render('admin/edit-event', { event: {}, success: null, error: exception.message });
  }
};

const getPublicEvent = async (req, res) => {
  try {
    const id = req.params.id || null;
    if (id === 'undefined' || id === null) {
      throw new Error('Provide valid identifier.');
    }
    console.log(id);
    const connection = await database.openConnection();
    const eventRepo = new repositories.Event(connection);

    const event = await eventRepo.getById(id);
    res.render('customer/event-details', {
      event, categories: res.locals.categories, success: null, error: null,
    });
  } catch (exception) {
    console.log(exception);
    res.render('customer/event-details', {
      event: {}, categories: res.locals.categories, success: null, error: exception.message,
    });
  }
};

module.exports = { getEvent, getPublicEvent };

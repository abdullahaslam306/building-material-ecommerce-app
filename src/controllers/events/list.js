const { database, repositories } = require('../../lib');

const list = async (req, res) => {
  try {
    const connection = await database.openConnection();
    const eventRepo = new repositories.Event(connection);

    const events = await eventRepo.listAll();
    res.render('admin/manage-events', { events, success: 'Event created successfully', error: null });
  } catch (exception) {
    res.render('admin/manage-events', { events : [],success: null, error: exception.message });
  }
};

module.exports = { list };
const { database, repositories } = require('../../lib');

const update = async (req, res) => {
  try {
    const id = req.params.id;

    if(typeof id != 'number' || id === 'undefined' || id === null) {
        throw new Error('Provide valid identifier.');
    }
    
    const connection = await database.openConnection();
    const eventRepo = new repositories.Event(connection);

    const events = await eventRepo.getById(id);
    res.render('admin/manage-events', { events, success: 'Event created successfully', error: null });
  } catch (exception) {
    res.render('admin/manage-events', { events : [],success: null, error: exception.message });
  }
};

module.exports = { update };
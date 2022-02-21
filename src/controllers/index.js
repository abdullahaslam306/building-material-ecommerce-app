const CreateEvent = require('./events/create');
const ListEvents = require('./events/list');
const DeleteEvent = require('./events/delete');
const GetEvent = require('./events/getEvent');
const CreateProduct = require('./product/create');

module.exports = {
  GetEvent,
  ListEvents,
  DeleteEvent,
  CreateEvent,
  CreateProduct,
};

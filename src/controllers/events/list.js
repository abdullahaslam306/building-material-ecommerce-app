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
    res.render('admin/manage-events', { events : [], success, error: exception.message });
  }
};

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

module.exports = { list };
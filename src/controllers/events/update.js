const multer = require('multer');
const { database, repositories } = require('../../lib');


const update = async (req, res) => {
  try {
    let fileName = null;
    const { id, title, description, event_date: eventDate } = req.body;
    console.log('here', req.body)
    if(req.file) {
      fileName = `/uploads/${req.file.filename}`;
    }
    const connection = await database.openConnection();
    const eventRepo = new repositories.Event(connection);

    await eventRepo.update(id, title, description, eventDate, fileName);
    res.redirect("/admin/event/list?success=Event updated successfully");
  } catch (exception) {
    console.log(exception)
    res.redirect("/admin/event/list?err=Unable to update event.");

  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

const upload = multer({ storage });

module.exports = { update, upload };
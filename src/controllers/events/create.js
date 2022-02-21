const multer = require('multer');

const { database, repositories } = require('../../lib');

const create = async (req, res) => {
  try {
    const { title, description, event_date: eventDate } = req.body;
    const fileName = `/uploads/${req.file.filename}`;
    const connection = await database.openConnection();

    const eventRepo = new repositories.Event(connection);

    await eventRepo.create(title, description, eventDate, fileName);
    res.render('admin/add-event', { success: 'Event created successfully', error: null });
  } catch (exception) {
    res.render('admin/add-event', { success: null, error: exception.message });
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

module.exports = { create, upload };

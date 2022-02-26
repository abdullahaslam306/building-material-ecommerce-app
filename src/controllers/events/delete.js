const { database, repositories } = require("../../lib");

const deleteEvent = async (req, res) => {
try {
  const id = req.params.id;
  console.log(typeof id)
  if (id === "undefined" || id === null) {
    throw new Error("Provide valid identifier.");
  }

  const connection = await database.openConnection();
  const eventRepo = new repositories.Event(connection);
  await eventRepo.delete(id);
  res.redirect("/admin/event/list?success=Event deleted successfully");
} catch (exception) {
  res.redirect("/admin/event/list?err=Unable to delete the event");
}
};

module.exports = { deleteEvent };

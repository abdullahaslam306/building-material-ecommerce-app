/**
 * Class to access and manage events
 */

class Event {
  constructor(dbConnection) {
    this.dbInstance = dbConnection;
  }

  async create(title, desc, date, cover) {
    const event = await this.dbInstance.event.create({
      title,
      desc,
      date,
      cover,
    });

    if (!(event instanceof this.dbInstance.event)) {
      throw new Error('Unable to create event.');
    }
    return event;
  }

  async listAll() {
    const events = await this.dbInstance.event.findAll();
    if ((events === null || events.length === 0)) {
      throw new Error('Unable to list events.');
    }
    return events;
  }

  async update(id ,title, desc, date, cover) {
    const where = {
      id
    }
    console.log(cover)
    const eventToUpdate = {
      title,
      desc,
      date,
    }
    if(cover != undefined || cover != null) {
      eventToUpdate.cover = cover
    }
    const event = await this.dbInstance.event.update(eventToUpdate, { where });
    return event;
  }

  async getById(id) {
    const where = { id };
    const event = await this.dbInstance.event.findOne({where});
    console.log(event);
    if (!(event instanceof this.dbInstance.event)) {
      throw new Error('Event not found.');
    }
    return event;
  }
  async delete(id) {
  const where = { id };
  await this.dbInstance.event.destroy({ where });
  }

}

module.exports = Event;

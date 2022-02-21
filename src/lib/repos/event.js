/**
 * Class to access and manage customers
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
    console.log(events);
    if ((events === null || events.length === 0)) {
      throw new Error('Exception in listing events.');
    }
    return events;
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

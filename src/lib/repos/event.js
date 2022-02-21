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

  async getById() {
    const events = await this.dbInstance.event.findAll();
    console.log(events);
    if ((events === null || events.length === 0)) {
      throw new Error('Exception in listing events.');
    }
    return events;
  }
  async delete(id) {
    const where = { id };
    const event = await this.dbInstance.event.destroy({ where });
    console.log(event);
    // if ((events === null || events.length === 0)) {
    //   throw new Error('Exception in deleting event.');
    // }
    return event;
  }

}

module.exports = Event;

/**
 * Class to access and manage customers
 */

class Event {
  constructor(dbConnection) {
    this.dbInstance = dbConnection;
  }

  async createEvent(title, desc, date, cover) {
    const event = await this.dbInstance.event.create({
      title,
      desc,
      date,
      cover,
    });

    if (!(event instanceof this.dbInstance.event)) {
      throw new Error ('Unable to create event');
    }
    return event;
  }
}

module.exports = Event;

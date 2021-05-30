const { v4: uuid4 } = require('uuid');

class Board {
  
  constructor({ id = uuid4(), title = 'New board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = [...columns];
  }

  static toResponse({ id, title, columns }) {
    return { id, title, columns };
  }
}

module.exports = Board;

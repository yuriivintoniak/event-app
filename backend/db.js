const db = require("better-sqlite3")("sqlite.db");

const createTable = () => {
  const sql = `
    CREATE TABLE events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      date TEXT,
      organizer TEXT
    )
  `
  db.prepare(sql).run();
};

const insertTable = (title, description, date, organizer) => {
  const sql = `
    INSERT INTO events (title, description, date, organizer)
    VALUES (?, ?, ?, ?)
  `
  db.prepare(sql).run(title, description, date, organizer);
}

const getEvents = () => {
  const sql = `
    SELECT * FROM events
  `
  const rows = db.prepare(sql).all();
  return rows;
};

module.exports = { getEvents };

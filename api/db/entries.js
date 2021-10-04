const db = require("./database");

const getAll = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(db.select().from("entries"));
    } catch (error) {
      reject(error);
    }
  });
};

const insert = (entries) => {
  return new Promise((resolve, reject) => {
    try {
      db.insert(entries)
        .into("entries")
        .returning("id")
        .then(function (id) {
          resolve(id);
        });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getAll, insert };

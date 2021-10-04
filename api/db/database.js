const knex = require("knex");
const env = process.env.NODE_ENV || "production";
module.exports = knex(require("../knexfile")[env]);

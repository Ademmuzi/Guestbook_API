module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "",
      port: "3306",
      database: "guestbook",
    },
  },
  production: {
    client: "mysql",
    connection: {
      host: "mysql-db",
      user: "dbuser",
      password: "dbuser",
      port: "3306",
      database: "db",
    },
  },
};

require("express-async-errors");

module.export = () => {
  process.on("unhandledRejection", (exception) => {
    throw exception;
  });
};

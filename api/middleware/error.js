const error = (err, req, res, next) => {
  res.status("500").send("Something failed. " + err);
};

module.exports = error;

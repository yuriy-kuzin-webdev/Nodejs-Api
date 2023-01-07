const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(err.message, err.stack);
};

module.exports = errorHandler;

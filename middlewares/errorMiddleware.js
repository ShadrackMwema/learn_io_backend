const logger = require('../common/logger');

// Error handling middleware
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const data = JSON.stringify({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
    statusCode,
  });

  logger.error(data);

  if (!res.headersSent) {
    res.status(statusCode).json({
      message: err.message || 'Internal Server Error',
      statusCode,
    });
  } else {
    next(err);
  }
}

module.exports = errorHandler;
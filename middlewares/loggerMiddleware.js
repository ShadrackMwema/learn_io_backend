const logger = require('../common/logger');

const logRequestResponse = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;

    const logDetails = {
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      statusCode: res.statusCode,
      responseTime: `${duration}ms`,
    };

    if (req.method === 'POST' || req.method === 'PUT') {
      logDetails.body = req.body;
    }

    logger.info(JSON.stringify(logDetails));
  });

  next();
};

module.exports = logRequestResponse;
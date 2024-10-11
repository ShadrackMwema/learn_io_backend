const connectDB = require('../configs/database.config');
const envUtils = require('./envUtils');

class Initializer {
  static async init() {
    // eslint-disable-next-line no-useless-catch
    try {
      const funcs = [
        envUtils.loadEnv(),
        connectDB(),
      ];

      await Promise.all(funcs);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Initializer;
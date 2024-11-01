const dotenv = require('dotenv');
const path = require('path');
const logger = require('./logger');

class EnvUtils {
  constructor() {
    this.envLoaded = false;
    this.envvars = {};
  }

  loadEnv(filePath = '.env') {
    if (!this.envLoaded) {
      try {
        dotenv.config({ path: path.resolve(process.cwd(), filePath) });
        this.envLoaded = true;
        this.envvars = process.env;
        logger.info(`Environment variables loaded from ${filePath}`);
      } catch (error) {
        throw new Error(`Failed to load environment variables: ${error.message}`);
      }
    }
  }

  get(variable) {
    if (!this.envLoaded) {
      throw new Error('Environment variables not loaded. Call loadEnv() first.');
    }
    return this.envvars[variable];
  }
}

const envUtils = new EnvUtils();
module.exports = envUtils;
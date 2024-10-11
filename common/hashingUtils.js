const bcrypt = require('bcrypt');
const logger = require('./logger');

const saltRounds = 10;

class HashingUtils {
  static async genSalt(round = 10) {
    return bcrypt.genSalt(round);
  }

  static async hash(value) {
    try {
      const salt = await this.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(value, salt);
      return hashedPassword;
    } catch (error) {
      logger.error(`Error while hashing data: ${error}`);
      return null;
    }
  }

  static async compare(hashedValue, value) {
    try {
      const res = await bcrypt.compare(value, hashedValue);
      return res;
    } catch (error) {
      logger.error(`Error while comparing data: ${error}`);
      return false;
    }
  }
}

module.exports = HashingUtils;
const validator = require('validator');

class DataUtils {
  static validMail(mail) {
    return validator.isEmail(String(mail).toLowerCase().trim());
  }

  static validString(data) {
    return data !== undefined && data !== null && data !== '';
  }

  static validPassword(data) {
    if (!this.validString(data)) {
      return false;
    }

    const hasUppercase = /[A-Z]/.test(data);
    const hasLowercase = /[a-z]/.test(data);
    const hasNumber = /[0-9]/.test(data);
    const isValidLength = data.length >= 8;

    return hasUppercase && hasLowercase && hasNumber && isValidLength;
  }
}

module.exports = DataUtils;
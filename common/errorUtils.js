class ErrorUtils {
    static notFound(message) {
      return this.errorInstance(message, 404);
    }
  
    static badRequest(message) {
      return this.errorInstance(message, 400);
    }
  
    static conflict(message) {
      return this.errorInstance(message, 409);
    }
  
    static forbidden(message) {
      return this.errorInstance(message, 403);
    }
  
    static errorInstance(message, code) {
      const err = new Error(message);
      err.statusCode = code;
      return err;
    }
  }
  
  module.exports = ErrorUtils;
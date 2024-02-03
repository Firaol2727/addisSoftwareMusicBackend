export class NotFoundError extends Error {
    constructor( message,error) {
      super(message.toString());
      this.statusCode = 404;
      this.name = this.constructor.name;// Set the class name as the error name
      this.payload=error;
      Error.captureStackTrace(this, this.constructor); // Capture the stack trace
    }
  }
  export class BadRequestError extends Error {
    constructor( message,error) {
      super(message.toString());
      this.statusCode = 400;
      this.name = this.constructor.name;// Set the class name as the error name
      this.payload=error;
      Error.captureStackTrace(this, this.constructor); // Capture the stack trace
    }
  }
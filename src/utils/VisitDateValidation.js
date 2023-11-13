import { EVENT_DATE } from "../constants/common.js";
import { CustomError } from "../constants/errors.js";

class VisitDateValidation {
  static validateInputEmpty(num, message) {
    if (num === '') {
      throw new CustomError(message);
    }
  }
  
  static validateIsNumber(num, message) {
    if (isNaN(num)) {
      throw new CustomError(message);
    }
  }
  
  static validateDateRange(num, message) {
    if(!(num >= EVENT_DATE.START && num <= EVENT_DATE.END)) {
      throw new CustomError(message);
    }
  }
}

export default VisitDateValidation;
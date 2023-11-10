import { EVENT_DATE } from "../constants/common.js";
import { CustomError } from "../constants/errors.js";

class Validation {
  static validateIsNumber(num, message) {
    if (isNaN(num)) {
      throw new CustomError(message);
    }
  }
  
  static validateDateRange(num, message) {
    if(!(num >= EVENT_DATE.start && num <= EVENT_DATE.end)) {
      throw new CustomError(message);
    }
  }
}

export default Validation;
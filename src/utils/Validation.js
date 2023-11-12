// constants
import { EVENT_DAY } from "../constants/common.js";
import { CustomError } from "../constants/errors.js";

class Validation {
  static validateIsNumber(num, message) {
    if (isNaN(num)) {
      throw new CustomError(message);
    }
  }
  
  static validateDateRange(num, message) {
    if(!(num >= EVENT_DAY.START && num <= EVENT_DAY.END)) {
      throw new CustomError(message);
    }
  }
}

export default Validation;
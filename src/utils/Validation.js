import { CustomError, ERROR_MESSAGES, COMMON } from "../constants/errors.js";
import { EVENT_DATE } from "../constants/common.js";

class Validation {
  static validateIsNumber(num) {
    if (isNaN(num)) {
      throw new CustomError(ERROR_MESSAGES.INVALID(COMMON.DATE));
    }
  }
  
  static validateDateRange(num) {
    if(!(num >= EVENT_DATE.start && num <= EVENT_DATE.end)) {
      throw new CustomError(ERROR_MESSAGES.INVALID(COMMON.DATE));
    }
  }
}

export default Validation;
import Validation from "./utils/Validation.js";

class InputValidator {
  static isVisitDateValidated(visitDate) {
    Validation.validateIsNumber(visitDate);
    Validation.validateDateRange(visitDate);
  }
}

export default InputValidator;
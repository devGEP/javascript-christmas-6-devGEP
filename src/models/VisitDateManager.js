import InputValidator from "../InputValidator.js";

class VisitDateManager {
  #visitDate;
  
  constructor(visitDate) {
    this.#visitDate = visitDate;
  }

  setVisitDate(visitDate) {
    this.#validate(visitDate);
    this.#visitDate = visitDate;
  }

  getVisitDate() {
    return this.#visitDate;
  }

  #validate(visitDate) {
    InputValidator.isVisitDateValidated(visitDate);
  }
}

export default VisitDateManager;
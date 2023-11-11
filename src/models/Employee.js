// views
import InputView from "../views/InputView.js";

class Employee {
  #visitDate;
  #menuNames;
  #menuCounts;

  constructor(visitDate, menuNames, menuCounts) {
    this.#visitDate = visitDate;
    this.#menuNames = menuNames;
    this.#menuCounts = menuCounts;
  }

  async handleVisitDate() {
    this.#visitDate = await InputView.readVisitDate();
  }

  getVisitDate() {
    return this.#visitDate;
  }

  async handleOrderedMenu() {
    [this.#menuNames, this.#menuCounts] = await InputView.readOrderMenu();
  }

  getOrderedMenu() {
    return [this.#menuNames, this.#menuCounts];
  }
}

export default Employee;
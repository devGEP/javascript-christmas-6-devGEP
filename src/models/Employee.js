class Employee {
  #visitDate;
  #menuNames;
  #menuCounts;

  constructor(visitDate, menuNames, menuCounts) {
    this.#visitDate = visitDate;
    this.#menuNames = menuNames;
    this.#menuCounts = menuCounts;
  }

  setVisitDate(visitDate) {
    this.#visitDate = visitDate;
  }

  getVisitDate() {
    return this.#visitDate;
  }

  setOrderedMenu(orderedMenuNames, orderedMenuCounts) {
    [this.#menuNames, this.#menuCounts] = [orderedMenuNames, orderedMenuCounts];
  }

  getOrderedMenu() {
    return [this.#menuNames, this.#menuCounts];
  }
}

export default Employee;
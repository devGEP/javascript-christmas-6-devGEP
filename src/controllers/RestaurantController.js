// models
import Employee from '../models/Employee.js';

// views
import OutputView from '../views/OutputView.js';

class RestaurantController {
  constructor() {
    this.employee = new Employee();
    this.visitDate = 0;
  }

  initialize() {
    OutputView.printWelcomeMessage();
  }

  async receiveRequiredInfo() {
    await this.employee.handleVisitDate();

    await this.employee.handleOrderedMenu();
  }

  displayReceipts() {
    OutputView.printEventPreviewMessage(this.employee.getVisitDate());
  }
}

export default RestaurantController;
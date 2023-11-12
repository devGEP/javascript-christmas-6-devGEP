import Employee from '../models/Employee.js';
import OutputView from '../views/OutputView.js';
import ReceiptController from './ReceiptController.js';

class RestaurantController {
  constructor() {
    this.employee = new Employee();
    this.receiptController = new ReceiptController(this.employee);
  }

  initialize() {
    OutputView.printWelcomeMessage();
  }

  async receiveRequiredInfo() {
    await this.employee.handleVisitDate();
    await this.employee.handleOrderedMenu();
  }

  displayReceipt() {
    OutputView.printEventPreviewMessage(this.employee.getVisitDate());

    this.receiptController.setupReceiptDiscounts();

    this.receiptController.displayReceiptDetails();
  }
}

export default RestaurantController;
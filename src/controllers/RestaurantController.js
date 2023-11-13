import Employee from '../models/Employee.js';
import VisitDateManager from '../models/VisitDateManager.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import ReceiptController from './ReceiptController.js';

class RestaurantController {
  constructor() {
    this.employee = new Employee();
    this.visitDateManager = new VisitDateManager();
    this.receiptController = new ReceiptController(this.employee, this.visitDateManager);
  }

  initialize() {
    OutputView.printWelcomeMessage();
  }

  async receiveRequiredInfo() {
    const visitDate = await InputView.readVisitDate();
    this.visitDateManager.setVisitDate(visitDate);

    const [orderedMenuNames, orderedMenuCounts] = await InputView.readOrderMenu();
    this.employee.setOrderedMenu(orderedMenuNames, orderedMenuCounts);
  }

  displayReceipt() {
    OutputView.printEventPreviewMessage(this.employee.getVisitDate());

    this.receiptController.setupReceiptDiscounts();

    this.receiptController.displayReceiptDetails();
  }
}

export default RestaurantController;
import OrderMenuManager from '../models/OrderMenuManager.js';
import VisitDateManager from '../models/VisitDateManager.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import ReceiptController from './ReceiptController.js';

class RestaurantController {
  constructor() {
    this.visitDateManager = new VisitDateManager();
    this.orderMenuManager = new OrderMenuManager();
    this.receiptController = new ReceiptController(this.visitDateManager, this.orderMenuManager);
  }

  initialize() {
    OutputView.printWelcomeMessage();
  }

  async receiveRequiredInfo() {
    const visitDate = await InputView.readVisitDate();
    this.visitDateManager.setVisitDate(visitDate);

    const [orderMenuNames, orderMenuCounts] = await InputView.readOrderMenu();
    this.orderMenuManager.setOrderedMenu(orderMenuNames, orderMenuCounts);
  }

  displayReceipt() {
    OutputView.printEventPreviewMessage(this.visitDateManager.getVisitDate());

    this.receiptController.setupReceiptDiscounts();

    this.receiptController.displayReceiptDetails();
  }
}

export default RestaurantController;
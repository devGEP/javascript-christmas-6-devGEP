// models
import Employee from '../models/Employee.js';
import Receipt from '../models/Receipt.js';

// views
import OutputView from '../views/OutputView.js';

// constants
import { RECEIPT_TITLE, PROFIT_HISTORY_DETAIL } from '../constants/eventResults.js';

class RestaurantController {
  constructor() {
    this.employee = new Employee();
    this.receipt = new Receipt();
    this.visitDate = 1;
    this.profitHistoryPrice = [];
  }

  initialize() {
    OutputView.printWelcomeMessage();
  }

  async receiveRequiredInfo() {
    await this.employee.handleVisitDate();

    await this.employee.handleOrderedMenu();
  }

  displayProfitHistory() {
    const profitHistoryNames = Object.values(PROFIT_HISTORY_DETAIL);

    OutputView.printReceiptTitle(RECEIPT_TITLE.PROFIT_HISTORY);

    profitHistoryNames.forEach((profit, index) => {
      OutputView.printProfitHistoryDetail(profit, this.profitHistoryPrice[index]);
    });
  }

  displayReceipts() {
    OutputView.printEventPreviewMessage(this.employee.getVisitDate());

    const discountsWithDate = this.receipt.calculateDiscountWithDate(this.employee.getVisitDate());
    this.profitHistoryPrice.push(...discountsWithDate);

    this.displayProfitHistory();
  }
}

export default RestaurantController;
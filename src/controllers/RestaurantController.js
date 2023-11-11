// models
import Employee from '../models/Employee.js';
import Receipt from '../models/Receipt.js';

// views
import OutputView from '../views/OutputView.js';

// constants
import { RECEIPT_TITLE, PROFIT_HISTORY_DETAIL, RESULT_FORMATS } from '../constants/eventResults.js';

class RestaurantController {
  constructor() {
    this.employee = new Employee();
    this.receipt = new Receipt();
    this.orderedMenu = [];
    this.beforePrice = 0;
    this.profitHistoryPrice = [];
  }

  initialize() {
    OutputView.printWelcomeMessage();
  }

  async receiveRequiredInfo() {
    await this.employee.handleVisitDate();

    await this.employee.handleOrderedMenu();
  }

  displayOrderedMenu() {
    const menu = this.employee.getOrderedMenu();
    this.orderedMenu.push(...menu);

    OutputView.printReceiptTitle(RECEIPT_TITLE.ORDER_MENU);
    
    this.orderedMenu[0].forEach((menu, index) => {
      OutputView.printOrderedMenu(menu, this.orderedMenu[1][index]);
    })
  }

  displayBeforeDiscountOrderedAmount() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.BEFORE_DISCOUNT_TOTAL_PRICE);

    this.beforePrice = this.receipt.calculateBeforeDiscountAmount(this.orderedMenu[0], this.orderedMenu[1]);
    OutputView.printTotalPrice(this.beforePrice);
  }

  displayGiftMenu() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.GIFT_MENU);

    const giftMenu = this.receipt.determineGiftMenu(this.beforePrice);
    OutputView.printGiftMenu(giftMenu);
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

    this.displayOrderedMenu();
    this.displayBeforeDiscountOrderedAmount();
    this.displayGiftMenu();
    this.displayProfitHistory();
  }
}

export default RestaurantController;
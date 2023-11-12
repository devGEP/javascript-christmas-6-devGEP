// models
import Employee from '../models/Employee.js';
import Receipt from '../models/Receipt.js';

// views
import OutputView from '../views/OutputView.js';

// constants
import { RECEIPT_TITLE } from '../constants/eventResults.js';

class RestaurantController {
  constructor() {
    this.employee = new Employee();
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

  setupReceiptDiscounts() {
    const menu = this.employee.getOrderedMenu();
    this.orderedMenu.push(...menu);

    const discountsWithDate = Receipt.calculateDiscountWithDate(this.employee.getVisitDate(), this.orderedMenu[0], this.orderedMenu[1]);
    this.profitHistoryPrice.push(...discountsWithDate);
  }

  displayReceipt() {
    OutputView.printEventPreviewMessage(this.employee.getVisitDate());

    this.setupReceiptDiscounts();

    this.displayOrderedMenu();
    this.displayBeforeDiscountOrderedAmount();
    this.displayGiftMenu();
    this.displayProfitHistory();
  }

  displayOrderedMenu() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.ORDER_MENU);
    
    this.orderedMenu[0].forEach((menu, index) => {
      OutputView.printOrderedMenu(menu, this.orderedMenu[1][index]);
    })
  }

  displayBeforeDiscountOrderedAmount() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.BEFORE_DISCOUNT_TOTAL_PRICE);

    this.beforePrice = Receipt.calculateBeforeDiscountAmount(this.orderedMenu[0], this.orderedMenu[1]);
    OutputView.printTotalPrice(this.beforePrice);
  }

  displayGiftMenu() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.GIFT_MENU);

    const giftMenu = Receipt.determineGiftMenu(this.beforePrice);
    OutputView.printGiftMenu(giftMenu);
  }

  displayProfitHistory() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.PROFIT_HISTORY);

    this.profitHistoryPrice.forEach((profit) => {
      OutputView.printProfitHistoryDetail(profit[0], profit[1]);
    });
  }
}

export default RestaurantController;
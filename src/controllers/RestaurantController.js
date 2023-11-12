// models
import Employee from '../models/Employee.js';
import Receipt from '../models/Receipt.js';

// views
import OutputView from '../views/OutputView.js';

// constants
import { RECEIPT_TITLE, PROFIT_HISTORY_DETAIL } from '../constants/eventResults.js';
import { BEVERAGE_MENU } from '../constants/menus.js';
import { DOESNT_EXIST } from '../constants/common.js';

class RestaurantController {
  constructor() {
    this.employee = new Employee();
    this.orderedMenu = [];
    this.beforePrice = 0;
    this.isGiftMenu = false;
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

    this.beforePrice = Receipt.calculateBeforeDiscountAmount(this.orderedMenu[0], this.orderedMenu[1]);

    this.isGiftMenu = Receipt.determineGiftMenu(this.beforePrice);
    if (this.isGiftMenu) {
      this.profitHistoryPrice.push([PROFIT_HISTORY_DETAIL.GIFT_EVENT, BEVERAGE_MENU.CHAMPAGNE.money]);
    }

  }

  displayReceipt() {
    OutputView.printEventPreviewMessage(this.employee.getVisitDate());

    this.setupReceiptDiscounts();

    this.displayOrderedMenu();
    this.displayBeforeDiscountOrderedAmount();
    this.displayGiftMenu();
    this.displayProfitHistory();
    this.displayTotalProfitPrice();
  }

  displayOrderedMenu() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.ORDER_MENU);
    
    this.orderedMenu[0].forEach((menu, index) => {
      OutputView.printOrderedMenu(menu, this.orderedMenu[1][index]);
    })
  }

  displayBeforeDiscountOrderedAmount() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.BEFORE_DISCOUNT_TOTAL_PRICE);

    OutputView.printTotalPrice(this.beforePrice);
  }

  displayGiftMenu() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.GIFT_MENU);

    OutputView.printGiftMenu(this.isGiftMenu);
  }

  displayProfitHistory() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.PROFIT_HISTORY);

    const isAllProfitNotInclude = this.profitHistoryPrice.every(profit => profit[1] === 0);

    if (isAllProfitNotInclude) {
      OutputView.printNoProfitMessage(DOESNT_EXIST);
      return;
    }

    this.profitHistoryPrice.forEach((profit) => {
      OutputView.printProfitHistoryDetail(profit[0], profit[1]);
    });
  }

  displayTotalProfitPrice() {
    OutputView.printReceiptTitle(RECEIPT_TITLE.TOTAL_PROFIT_PRICE);

    let totalProfitPrice = 0;

    this.profitHistoryPrice.forEach((profit) => {
      totalProfitPrice += profit[1];
    })

    OutputView.printTotalProfitPrice(totalProfitPrice);
  }
}

export default RestaurantController;
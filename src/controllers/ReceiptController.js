import Receipt from '../models/Receipt.js';
import OutputView from '../views/OutputView.js';
import { DOESNT_EXIST, DEFAULT_NUM } from '../constants/common.js';
import { BEVERAGE_MENU } from '../constants/menus.js';
import { RECEIPT_TITLE, PROFIT_HISTORY_DETAIL, DECEMBER_EVENT_BADGE } from '../constants/eventResults.js';

class ReceiptController {
  constructor(employee) {
    this.employee = employee;
    this.orderedMenu = [];
    this.profitHistoryPrice = [];
    this.beforePrice = 0;
    this.isGiftMenu = false;
    this.totalProfitPrice = 0;
  }

  setupReceiptDiscounts() {
    const menu = this.employee.getOrderedMenu();
    this.orderedMenu.push(...menu);

    const discountsWithDate = Receipt.calculateDiscountWithDate(this.employee.getVisitDate(), this.orderedMenu[0], this.orderedMenu[1]);
    this.profitHistoryPrice.push(...discountsWithDate);

    this.beforePrice = Receipt.calculateBeforeDiscountAmount(this.orderedMenu[0], this.orderedMenu[1]);

    this.isGiftMenu = Receipt.determineGiftMenu(this.beforePrice);
    if (this.isGiftMenu) {
      this.addGiftEventToProfitHistory();
    }
  }

  addGiftEventToProfitHistory() {
    this.profitHistoryPrice.push([PROFIT_HISTORY_DETAIL.GIFT_EVENT, BEVERAGE_MENU.CHAMPAGNE.money]);
  }

  displayReceiptDetails() {
    this.displayOrderedMenu();
    this.displayBeforeDiscountOrderedAmount();
    this.displayGiftMenu();
    this.displayProfitHistory();
    this.displayTotalProfitPrice();
    this.displayAfterDiscountOrderedAmount();
    this.displayDecemberEventBadge();
  }

  displayEventPreviewMessage() {
    OutputView.printEventPreviewMessage(this.employee.getVisitDate());
  }

  displayOrderedMenu() {
    OutputView.printText(RECEIPT_TITLE.ORDER_MENU);

    this.orderedMenu[0].forEach((menu, index) => {
      OutputView.printOrderedMenu(menu, this.orderedMenu[1][index]);
    });
  }

  displayBeforeDiscountOrderedAmount() {
    OutputView.printText(RECEIPT_TITLE.BEFORE_DISCOUNT_TOTAL_PRICE);
    OutputView.printTotalPrice(this.beforePrice);
  }

  displayGiftMenu() {
    OutputView.printText(RECEIPT_TITLE.GIFT_MENU);
    OutputView.printGiftMenu(this.isGiftMenu);
  }

  displayProfitHistory() {
    OutputView.printText(RECEIPT_TITLE.PROFIT_HISTORY);

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
    OutputView.printText(RECEIPT_TITLE.TOTAL_PROFIT_PRICE);

    this.profitHistoryPrice.forEach((profit) => {
      this.totalProfitPrice += profit[1];
    })

    OutputView.printTotalProfitPrice(this.totalProfitPrice);
  }

  displayAfterDiscountOrderedAmount() {
    OutputView.printText(RECEIPT_TITLE.AFTER_DISCOUNT_TOTAL_PRICE);

    const totalDiscount = this.profitHistoryPrice.reduce((acc, [profitTitle, price]) => {
      if (profitTitle !== PROFIT_HISTORY_DETAIL.GIFT_EVENT) {
        return acc + price;
      }

      return acc;
    }, DEFAULT_NUM); 

    OutputView.printTotalPrice(this.beforePrice - totalDiscount);
  }

  displayDecemberEventBadge() {
    OutputView.printText(RECEIPT_TITLE.EVENT_BADGE);

    const isBadge = Object.values(DECEMBER_EVENT_BADGE).some(badge => {
      if (this.totalProfitPrice >= badge.money) {
        OutputView.printText(badge.name);
        return true;
      }
      return false;
    });

    if (!isBadge) {
      OutputView.printNoProfitMessage(DOESNT_EXIST);
    }
  }
}

export default ReceiptController;
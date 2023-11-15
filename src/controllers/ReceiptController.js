import ReceiptCalculator from '../utils/ReceiptCalculator.js';
import OutputView from '../views/OutputView.js';
import { DOESNT_EXIST } from '../constants/common.js';
import { BEVERAGE_MENU } from '../constants/menus.js';
import { RECEIPT_TITLE, PROFIT_HISTORY_DETAIL } from '../constants/eventResults.js';

class ReceiptController {
  constructor(visitDateManager, orderMenuManager) {
    this.visitDateManager = visitDateManager;
    this.orderMenuManager = orderMenuManager;
    this.orderedMenu = [];
    this.profitHistoryPrice = [];
    this.beforePrice = 0;
    this.isGiftMenu = false;
    this.totalProfitPrice = 0;
  }

  setupReceiptDiscounts() {
    const menu = this.orderMenuManager.getOrderedMenu();
    this.orderedMenu.push(...menu);

    const discountsWithDate = ReceiptCalculator.calculateDiscountWithDate(this.visitDateManager.getVisitDate(), this.orderedMenu[0], this.orderedMenu[1]);
    this.profitHistoryPrice.push(...discountsWithDate);

    this.beforePrice = ReceiptCalculator.calculateBeforeDiscountAmount(this.orderedMenu[0], this.orderedMenu[1]);

    this.isGiftMenu = ReceiptCalculator.determineGiftMenu(this.beforePrice);
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
    OutputView.printEventPreviewMessage(this.visitDateManager.getVisitDate());
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

    const afterDiscountAmount = ReceiptCalculator.calculateAfterDiscountAmount(this.beforePrice, this.profitHistoryPrice);

    OutputView.printTotalPrice(afterDiscountAmount);
  }

  displayDecemberEventBadge() {
    OutputView.printText(RECEIPT_TITLE.EVENT_BADGE);

    const badge = ReceiptCalculator.determineEventBadge(this.totalProfitPrice);

    if (badge) {
      OutputView.printText(badge.name);
      return;
    }
    OutputView.printNoProfitMessage(DOESNT_EXIST);
  }
}

export default ReceiptController;
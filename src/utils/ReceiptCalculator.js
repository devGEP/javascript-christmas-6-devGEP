import MenuCalculator from './MenuCalculator.js';
import DiscountCalculator from './DiscountCalculator.js';
import { DEFAULT_NUM } from '../constants/common.js';
import { PROFIT_HISTORY_DETAIL, DECEMBER_EVENT_BADGE } from '../constants/eventResults.js';
import { APPETIZER_MENU, MAIN_MENU, DESSERT_MENU, BEVERAGE_MENU } from '../constants/menus.js';

class ReceiptCalculator {
  static calculateDiscountWithDate(visitDate, orderedMenuNames, orderedMenuCounts) {
    return [
      DiscountCalculator.calculateChristmasDDay(visitDate), 
      DiscountCalculator.calculateDiscountBasedOnDay(visitDate, orderedMenuNames, orderedMenuCounts),
      DiscountCalculator.calculateSpecialEvent(visitDate)
    ]
  }

  static calculateBeforeDiscountAmount(orderedMenuName, orderedMenuCount) {
    let totalPrice = 0;

    orderedMenuName.forEach((menu, index) => {
      totalPrice += MenuCalculator.compareAndCalculateMenuPrice(APPETIZER_MENU, menu, orderedMenuCount[index]);
      totalPrice += MenuCalculator.compareAndCalculateMenuPrice(MAIN_MENU, menu, orderedMenuCount[index]);
      totalPrice += MenuCalculator.compareAndCalculateMenuPrice(DESSERT_MENU, menu, orderedMenuCount[index]);
      totalPrice += MenuCalculator.compareAndCalculateMenuPrice(BEVERAGE_MENU, menu, orderedMenuCount[index]);
    })

    return totalPrice;
  }

  static determineGiftMenu(beforePrice) {
    if(beforePrice >= 120000) {
      return true;
    }
    return false;
  }

  static calculateAfterDiscountAmount(beforePrice, profitHistoryPrice) {
    const totalDiscount = profitHistoryPrice.reduce((acc, [profitTitle, price]) => {
      if (profitTitle !== PROFIT_HISTORY_DETAIL.GIFT_EVENT) {
        return acc + price;
      }
      return acc;
    }, DEFAULT_NUM);

    return beforePrice - totalDiscount;
  }

  static determineEventBadge(totalProfitPrice) {
    return Object.values(DECEMBER_EVENT_BADGE).find(badge => totalProfitPrice >= badge.money);
  }
}

export default ReceiptCalculator;
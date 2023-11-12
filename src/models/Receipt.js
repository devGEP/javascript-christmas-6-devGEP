// models
import DiscountCalculator from '../models/DiscountCalculator.js';
import MenuCalculator from './MenuCalculator.js';

// constants
import { APPETIZER_MENU, MAIN_MENU, DESSERT_MENU, BEVERAGE_MENU } from '../constants/menus.js';

class Receipt {
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
}

export default Receipt;
// models
import CalculateDiscount from '../models/CalculateDiscount.js';

// constants
import { APPETIZER_MENU, MAIN_MENU, DESSERT_MENU, BEVERAGE_MENU } from '../constants/menus.js';

class Receipt {
  constructor() {
    this.calculatediscount = new CalculateDiscount();
  }

  calculateDiscountWithDate(visitDate) {
    return [this.calculatediscount.calculateChristmasDDay(visitDate), this.calculatediscount.calculateSpecialEvent(visitDate)]
  }

  compareMenu(menus, orderedMenuName, orderedMenuCount) {
    const menuName = Object.values(menus).map((menu) => menu.name);
    const menuPrice = Object.values(menus).map((menu) => menu.money);

    if (menuName.includes(orderedMenuName)) {
      return menuPrice[menuName.indexOf(orderedMenuName)] * orderedMenuCount;
    }
    return 0;
  }

  calculateBeforeDiscountAmount(orderedMenuName, orderedMenuCount) {
    let totalPrice = 0;

    orderedMenuName.forEach((menu, index) => {
      totalPrice += this.compareMenu(APPETIZER_MENU, menu, orderedMenuCount[index]);
      totalPrice += this.compareMenu(MAIN_MENU, menu, orderedMenuCount[index]);
      totalPrice += this.compareMenu(DESSERT_MENU, menu, orderedMenuCount[index]);
      totalPrice += this.compareMenu(BEVERAGE_MENU, menu, orderedMenuCount[index]);
    })

    return totalPrice;
  }

  determineGiftMenu(beforePrice) {
    if(beforePrice >= 120000) {
      return true;
    }
    return false;
  }
}

export default Receipt;
import MenuCalculator from "./MenuCalculator.js";
import { DISCOUNT_MONEY, SPECIAL_DISCOUNT_DAY, CHIRSTMAS_EVENT_DATE, DAYS_IN_WEEK, DAY_OF_THE_WEEK } from "../constants/common.js";
import { MAIN_MENU, DESSERT_MENU } from '../constants/menus.js';
import { PROFIT_HISTORY_DETAIL } from "../constants/eventResults.js";

class DiscountCalculator {
  static calculateChristmasDDay(visitDate) {
    // 이벤트 할인 기간은 12.01 ~ 12.25까지이기 때문에 25일까지만 할인을 적용한다.
    if (visitDate >= CHIRSTMAS_EVENT_DATE.START && visitDate <= CHIRSTMAS_EVENT_DATE.END) {
      return [PROFIT_HISTORY_DETAIL.CHRISTMAS_D_DAY_DISCOUNT, DISCOUNT_MONEY.DEFAULT + DISCOUNT_MONEY.CHRISTMAS_INCREASE * (visitDate - 1)];
    }
    return [PROFIT_HISTORY_DETAIL.CHRISTMAS_D_DAY_DISCOUNT, DISCOUNT_MONEY.NO_DISCOUNT];
  }

  static calculateSpecialEvent(visitDate) {
    if (SPECIAL_DISCOUNT_DAY.includes(Number(visitDate))) {
      return [PROFIT_HISTORY_DETAIL.SPECIAL_DISCOUNT, DISCOUNT_MONEY.DEFAULT];
    }
    return [PROFIT_HISTORY_DETAIL.SPECIAL_DISCOUNT, DISCOUNT_MONEY.NO_DISCOUNT];
  }

  static isWeekend(visitDate) {
    return visitDate % DAYS_IN_WEEK === DAY_OF_THE_WEEK.FIRDAY || visitDate % DAYS_IN_WEEK === DAY_OF_THE_WEEK.SATURDAY;
  }

  static isWeekday(visitDate) {
    return (visitDate % DAYS_IN_WEEK >= DAY_OF_THE_WEEK.SUNDAY && visitDate % DAYS_IN_WEEK <= DAY_OF_THE_WEEK.WEDNESDAY) || visitDate % DAYS_IN_WEEK === DAY_OF_THE_WEEK.THURSDAY
  }

  static calculateDiscountBasedOnDay(visitDate, orderedMenu, orderedMenuCount) {
    if (this.isWeekend(visitDate)) {
      return [PROFIT_HISTORY_DETAIL.WEEKEND_DISCOUNT, this.calculateDiscountAmountByMenu(MAIN_MENU, orderedMenu, orderedMenuCount)];
    }

    if (this.isWeekday(visitDate)) {
      return [PROFIT_HISTORY_DETAIL.WEEKDAY_DISCOUNT, this.calculateDiscountAmountByMenu(DESSERT_MENU, orderedMenu, orderedMenuCount)];
    }
  }
  
  static calculateDiscountAmountByMenu(menus, orderedMenu, orderedMenuCount) {
    let discountNum = 0;

    orderedMenu.forEach((menu, index) => {
      discountNum += MenuCalculator.compareMenuAndOrderedMenu(menus, menu, orderedMenuCount[index]);
    })

    return discountNum * DISCOUNT_MONEY.WEEKDAY_OR_WEEKEND;
  }
}

export default DiscountCalculator;
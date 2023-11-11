// constants
import { DISCOUNT_MONEY, SPECIAL_DISCOUNT_DAY } from "../constants/common.js";

class CalculateDiscount {
  calculateChristmasDDay(visitDate) {
    // 이벤트 할인 기간은 12.01 ~ 12.25까지이기 때문에 25일까지만 할인을 적용한다.
    if (visitDate <= 25) {
      return DISCOUNT_MONEY.DEFAULT + DISCOUNT_MONEY.CHRISTMAS_INCREASE * (visitDate - 1);
    }
    return DISCOUNT_MONEY.NO_DISCOUNT;
  }

  calculateSpecialEvent(visitDate) {
    if (SPECIAL_DISCOUNT_DAY.includes(visitDate)) {
      return DISCOUNT_MONEY.DEFAULT;
    }
    return DISCOUNT_MONEY.NO_DISCOUNT;
  }  
}

export default CalculateDiscount;
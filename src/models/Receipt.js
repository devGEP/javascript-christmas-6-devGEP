// models
import CalculateDiscount from '../models/CalculateDiscount.js';

class Receipt {
  constructor() {
    this.calculatediscount = new CalculateDiscount();
  }

  calculateDiscountWithDate(visitDate) {
    return [this.calculatediscount.calculateChristmasDDay(visitDate), this.calculatediscount.calculateSpecialEvent(visitDate)]
  }
}

export default Receipt;
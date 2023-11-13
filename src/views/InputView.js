import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../InputValidator.js";
import OrderMenuManager from "../models/OrderMenuManager.js";
import { RESTAURANT_QUESTION } from "../constants/messages.js";

const InputView = {
  async readVisitDate() {
    try {
      const visitDate = await Console.readLineAsync(RESTAURANT_QUESTION.ASK_VISIT_DATE);
      InputValidator.isVisitDateValidated(visitDate);

      return visitDate;
    } catch (error) {
      Console.print(error.message);
      return this.readVisitDate();
    }
  },

  async readOrderMenu() {
    try {
      const orderedMenu = await Console.readLineAsync(RESTAURANT_QUESTION.ASK_MENU);
      
      const [orderMenuNames, orderMenuCounts] = OrderMenuManager.processOrderMenu(orderedMenu);

      return [orderMenuNames, orderMenuCounts];
    } catch (error) {
      Console.print(error.message);
      return this.readOrderMenu();
    }
  },
}

export default InputView;
